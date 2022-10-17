import { Form, Params, useLoaderData, useNavigation } from 'react-router-dom'
import {
  getContact,
  Contact as ContactType,
  timeOut,
  updateContact,
} from '../model/contacts'

export async function loader({ params }: { params: Params<string> }) {
  await timeOut()
  const contact = await getContact(params.contactId)
  return { contact }
}

export async function action({
  params,
  request,
}: {
  params: Params
  request: Request
}) {
  if (!params.contactId) return
  const formData = await request.formData()
  await updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  })
}

export function Contact() {
  const { contact } = useLoaderData() as { contact: ContactType }
  const navigation = useNavigation()

  return (
    <section
      className={`hstack gap-4 ms-4 ${
        navigation.state === 'loading' && 'opacity-25'
      }`}
      style={{ transition: 'opacity 0.2s ease-out ' }}
    >
      <img src={contact.avatar} className="rounded" />

      <div className="vstack justify-content-center">
        <h2 className="m-0 d-flex justify-content-between gap-2">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite favorite={contact.favorite === true} />
        </h2>
        <p className="lead text-primary m-0">{contact.twitter}</p>
        <p>{contact.notes}</p>
        <div className="hstack gap-2">
          <Form action="edit">
            <button className="btn btn-outline-primary btn-sm" type="submit">
              edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm('Please confirm you want to delete this contact?')) {
                event.preventDefault()
              }
            }}
          >
            <button
              className="btn btn-outline-danger ms-1 btn-sm"
              type="submit"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </section>
  )
}

function Favorite({ favorite }: { favorite: boolean }) {
  return (
    <Form method="post">
      <button
        className="btn btn-outline-primary py-0 m-0 fs-2 border border-0"
        value={favorite ? 'false' : 'true'}
        type="submit"
        name="favorite"
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  )
}
