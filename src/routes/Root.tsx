import { useLoaderData, Form } from 'react-router-dom'
import { createContact, getContacts, Contact } from '../model/contacts'

type LoaderData = {
  contacts: Contact[]
}

export async function loader() {
  const contacts = await getContacts()
  return { contacts }
}

export async function action() {
  await createContact()
}

export function Root() {
  const { contacts } = useLoaderData() as LoaderData

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-light p-0 min-vh-100 d-flex flex-column">
          <div className="search-form mt-3 pb-3 border-bottom">
            <div className="mx-3 d-flex gap-2">
              <Form role="search">
                <input
                  className="form-control me-2 shadow-sm"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="q"
                />
              </Form>
              <Form method="post">
                <button className="btn btn-primary shadow-sm" type="submit">
                  New
                </button>
              </Form>
            </div>
          </div>

          <div className="contacts">
            <nav>
              {contacts.length ? (
                <ul className="list-group list-group-flush mx-3 my-3">
                  {contacts.map((contact) => (
                    <li key={contact.id} className="list-group-item">
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <i>No Cotacts to show</i>
              )}
            </nav>
          </div>
          <header className="mt-auto border-top py-3 d-flex align-items-center gap-3 justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height={35}
              fill="currentColor"
            >
              <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
            </svg>
            <h1 className="fs-4 m-0 text-center">Contacts App</h1>
          </header>
        </div>

        <div className="col-8"></div>
      </div>
    </div>
  )
}
