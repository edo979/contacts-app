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
                  ? (linkActivClass = 'disabled list-group-item-secondary')
                  : ''

                return `list-group-item list-group-item-action d-flex justify-content-between ${linkActivClass}`
              }}
            >
              {contact.first || contact.last ? (
                <>
                  {contact.first} {contact.last}
                </>
              ) : (
                <i>No Name</i>
              )}
              <span>{contact.favorite && '★'}</span>
            </NavLink>
          ))}
        </nav>
      ) : (
        <i className="d-block text-center">No Cotacts to show</i>
      )}
    </>
  )
}
