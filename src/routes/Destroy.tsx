import { redirect, Params } from 'react-router-dom'
import { deleteContact } from '../model/contacts'

export async function action({ params }: { params: Params<string> }) {
  if (!params.contactId) throw new Error("Can't delete contact!")

  await deleteContact(params.contactId)
  return redirect('/')
}
