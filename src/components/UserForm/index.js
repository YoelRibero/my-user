import React from 'react'

export default function UserForm({ onChange, onSubmit, form, error }) {
  return (
    <div className='userForm'>
      {error && <h3>Ups! there was error {error}</h3>}
      <form onSubmit={onSubmit}>
        <div className='userForm__multiGroup'>
          <div className='userForm__group'>
            <label>First Name</label>
            <input
              onChange={onChange}
              name='firstName'
              type='text'
              value={form.firstName}
            />
          </div>
          <div className='userForm__group'>
            <label>Last Name</label>
            <input
              onChange={onChange}
              name='lastName'
              type='text'
              value={form.lastName}
            />
          </div>
        </div>
        <div className='userForm__group'>
          <label>Email</label>
          <input
            onChange={onChange}
            name='email'
            type='email'
            value={form.email}
          />
        </div>
        <div className='userForm__group'>
          <label>Avatar url</label>
          <small>Copy and past some url where you to has your photo</small>
          <input
            onChange={onChange}
            name='avatarUrl'
            type='text'
            value={form.avatarUrl}
          />
        </div>
        <div className='userForm__multiGroup'>
          <div className='userForm__group'>
            <label>Job Title</label>
            <input
              onChange={onChange}
              name='jobTitle'
              type='text'
              value={form.jobTitle}
            />
          </div>
          <div className='userForm__group'>
            <label>Job Related</label>
            <select
              onChange={onChange}
              name='jobRelated'
              value={form.jobRelated}
            >
              <option>- Select option -</option>
              <option value='construction'>Construction</option>
              <option value='gastronomy'>Gastronomy</option>
              <option value='programming'>Programming</option>
              <option value='singer'>Singer</option>
              <option value='photography'>Photography</option>
              <option value='accountant'>Accountant</option>
              <option value='dentist'>Dentist</option>
              <option value='engineer'>Engineer</option>
              <option value='designer'>Designer</option>
              <option value='laborer'>Laborer</option>
              <option value='lawyer'>Lawyer</option>
              <option value='mechanic'>Mechanic</option>
              <option value='medicine'>Medicine</option>
              <option value='teacher'>Teacher</option>
            </select>
          </div>
        </div>
        <div className='userForm__group'>
          <label>Prefer Color</label>
          <input
            onChange={onChange}
            name='preferColor'
            type='color'
            value={form.preferColor}
          />
        </div>
        <div className='userForm__group'>
          <label>Where do I'm follow you?</label>
          <input
            onChange={onChange}
            name='twitter'
            type='text'
            value={form.twitter}
          />
        </div>
        <div className='userForm__action'>
          <button className='btn btn-primary'>Save</button>
        </div>
      </form>
    </div>
  )
}
