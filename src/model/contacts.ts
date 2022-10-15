import localforage from 'localforage'
import { matchSorter } from 'match-sorter'
import sortBy from 'sort-by'

type Contact = {
  id: string
  createdAt: number
  first?: string
  last?: string
  avatar?: string
  twitter?: string
  notes?: string
  favorite?: boolean
}

export async function getContacts(query: string): Promise<Contact[]> {
  let contacts: Contact[] | null = await localforage.getItem('contacts')

  if (!contacts) contacts = []
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ['first', 'last'] })
  }
  return contacts.sort(sortBy('last', 'createdAt'))
}

export async function createFunction(): Promise<Contact[]> {
  const id = Math.random().toString(36).substring(2, 9)
  const contact = { id, createdAt: Date.now() }
  const contacts = []
  contacts.unshift(contact)

  await set(contacts)

  return contacts
}

function set(contacts: Contact[]): Promise<Contact[]> {
  return localforage.setItem('contacts', contacts)
}
