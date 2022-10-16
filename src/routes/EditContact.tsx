import { Form, useLoaderData } from 'react-router-dom'
import { Contact } from '../model/contacts'

export function EditContact() {
  const contact = useLoaderData() as Contact

  return (
    <Form>
      <h2>Edit Contact:</h2>
      <div className="row">
        <label htmlFor="first" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="first"
            name="first"
            placeholder="First"
            defaultValue={contact.first}
          />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="second"
            name="second"
            placeholder="Last"
            defaultValue={contact.last}
          />
        </div>
      </div>

      <div className="row mt-3">
        <label className="col-sm-2 col-form-label" htmlFor="twiter">
          Twiter
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="twiter"
            name="twiter"
            placeholder="@jack"
            defaultValue={contact.twitter}
          />
        </div>
      </div>

      <div className="row mt-3">
        <label className="col-sm-2 col-form-label" htmlFor="avatar">
          Avatar URL
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="avatar"
            name="avatar"
            placeholder="https://example.com/avatar.jpg"
            defaultValue={contact.avatar}
          />
        </div>
      </div>

      <div className="row mt-3">
        <label className="col-sm-2 col-form-label" htmlFor="notes">
          Notes
        </label>
        <div className="col-sm-10">
          <textarea
            className="w-100 form-control"
            rows={5}
            name="notes"
            id="notes"
            defaultValue={contact.notes}
          />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-10 offset-sm-2">
          <button className="btn btn-outline-primary">Save</button>
          <button className="btn btn-outline-dark ms-2">Cancel</button>
        </div>
      </div>
    </Form>
  )
}
