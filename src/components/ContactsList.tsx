import { NavLink } from 'react-router-dom'
import { Contact } from '../model/contacts'

type ContactsListProps = {
  contacts: Contact[]
}

export function ContactsList({ contacts }: ContactsListProps) {
  return (
    <>
      {contacts.length ? (
        <nav className="list-group ">
          {contacts.map((contact) => (
            <NavLink
              to={`/contacts/${contact.id}`}
              key={contact.id}
              className={({ isActive, isPending }) => {
                let linkActivClass = ''
                isActive
                  ? (linkActivClass = 'active')
                  : isPending
                  ? (linkActivClass = 'disabled')
                  : ''

                return `list-group-item list-group-item-action ${linkActivClass}`
              }}
            >
              {contact.first || contact.last ? (
                <>
                  {contact.first} {contact.last}
                </>
              ) : (
                <i>No Name</i>
              )}
            </NavLink>
          ))}
        </nav>
      ) : (
        <i className="d-block text-center">No Cotacts to show</i>
      )}
    </>
  )
}
