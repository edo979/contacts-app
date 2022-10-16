import { Params, useLoaderData } from 'react-router-dom'
import { getContact, Contact as ContactType } from '../model/contacts'

export function Contact() {
  const contact = useLoaderData() as ContactType

  return (
    <section className="hstack gap-4 ms-4">
      <img src="http://placekitten.com/200/200" className="rounded" />
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
        <p className="lead text-primary">Contact</p>
        <p>contact</p>
        <div>
          <button className="btn btn-outline-primary">edit</button>{' '}
          <button className="btn btn-outline-danger ms-1">Delete</button>
        </div>
      </div>
    </section>
  )
}

export async function loader({ params }: { params: Params<string> }) {
  const contact = await getContact(params.contactId)
  return { contact }
}
