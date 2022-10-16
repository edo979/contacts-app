import { Form } from 'react-router-dom'

export function EditContact() {
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
          />
        </div>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="second"
            name="second"
            placeholder="Last"
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
