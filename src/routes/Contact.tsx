import { Form, Params, useLoaderData } from 'react-router-dom'
import { getContact, Contact as ContactType } from '../model/contacts'

export async function loader({ params }: { params: Params<string> }) {
  const contact = await getContact(params.contactId)
  return { contact }
}

export function Contact() {
  const { contact } = useLoaderData() as { contact: ContactType }
  console.log(contact)

  return (
    <section className="hstack gap-4 ms-4">
      <img src={contact.avatar} className="rounded" />
      <div className="vstack gap-3">
        <h2 className="m-0">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
        </h2>
        <p className="lead text-primary">{contact.twitter}</p>
        <p>{contact.notes}</p>
        <div className="hstack gap-2">
          <Form action="edit">
            <button className="btn btn-outline-primary" type="submit">
              edit
            </button>
          </Form>
          <Form>
            <button className="btn btn-outline-danger ms-1" type="submit">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </section>
  )
}
