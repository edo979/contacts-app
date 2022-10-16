import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
//import sortBy from 'sort-by'

export type Contact = {
  id: string
  createdAt: number
  first?: string
  last?: string
  avatar?: string
  twitter?: string
  notes?: string
  favorite?: boolean
}

export async function getContacts(query?: string): Promise<Contact[]> {
  let contacts: Contact[] | null = await localforage.getItem('contacts')

  if (!contacts) contacts = []
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] })
  }
  //return contacts.sort(sortBy('last', 'createdAt'))
  return contacts
}

export async function createContact(): Promise<Contact> {
  const id = Math.random().toString(36).substring(2, 9)
  const contact = { id, createdAt: Date.now() }
  const contacts = await getContacts()
  contacts.unshift(contact)

  await set(contacts)

  return contact
}

export async function getContact(id?: string): Promise<Contact | null> {
  if (!id) return null

  const contacts: Contact[] = await getContacts()
  const contact = contacts.find((contact) => contact.id === id)

  return contact ?? null
}

export async function updateContact(
  id: string,
  updates: { [k: string]: FormDataEntryValue }
): Promise<Contact | null> {
  const contacts = await getContacts()
  const contact = contacts.find((contact) => contact.id === id)

  if (!contact) throw new Error('No contact found for: ' + id)

  Object.assign(contact, updates)
  set(contacts)

  return contact
}

function set(contacts: Contact[]): Promise<Contact[]> {
  return localforage.setItem('contacts', contacts)
}
