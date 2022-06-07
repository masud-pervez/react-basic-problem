import React, { useState } from 'react'

export default function Form() {
  const [formData, setFormData] = useState({})

  const handleChange = ({target}) => {
    const newFormData =  {...formData, [target.id]:target.value}
    // console.log(target.id, "===",target.value);
    setFormData(newFormData)
  }

  const handleSubmit = (v) => {
    v.preventDefault();
    console.log("Form submited" ,v);
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <form action="" onSubmit={handleSubmit} className='border my-5 p-3 shadow rounded'>
            <div className='name my-3'>
              <label htmlFor="name">Name</label>
              <input
                className='form-control'
                onChange={handleChange}
                type="text"
                id='name'
                required
              />
            </div>
            <div className='email my-3'>
              <label htmlFor="email">Email</label>
              <input
                className='form-control'
                // value={formData.email}
                onChange={handleChange}
                type="email"
                id='email'
                required
              />
            </div>
            <div className='password my-3'>
              <label htmlFor="password">Password</label>
              <input
                className='form-control'
                // value={formData.password}
                onChange={handleChange}
                type="password" 
                id='password'
                required
              />
            </div>
            <div className='submit my-3 text-center '>
              <button 
                className='btn btn-info w-100 text-light'
              >Submit</button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-head py-3 text-center">
              <h1>Detail</h1>
            </div>
            <div className="card-body my-5">
              <p><span className='badge bg-info'>Name</span> <span className='text-success'>{formData.name}</span></p>
              <p><span className='badge bg-primary'>Email</span> <span className='text-success'>{formData.email}</span></p>
              <p><span className='badge bg-info'>Password</span> <span className='text-success'>{formData.password}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
