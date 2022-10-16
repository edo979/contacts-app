import { Form, Params, useLoaderData } from 'react-router-dom'
import { getContact, Contact as ContactType } from '../model/contacts'

export async function loader({ params }: { params: Params<string> }) {
  const contact = await getContact(params.contactId)
  return { contact }
}

export function Contact() {
  const { contact } = useLoaderData() as { contact: ContactType }

  return (
    <section className="hstack gap-4 ms-4">
      <img src={contact.avatar} className="rounded" />
      <div className="vstack justify-content-center">
        <h2 className="m-0">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
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
