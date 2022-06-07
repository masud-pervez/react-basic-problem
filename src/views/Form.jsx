import React, { useState } from 'react'


export default function Form() {

  const [formData, setFormData] = useState({});

  const handleChange = ({target}) => {
    const newData = { ...formData, [target.id]: target.value};
    setFormData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submited", formData);
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="col-md-4">
          <form action="" onSubmit={handleSubmit} className='border p-3 shadow rounded'>
            <div className='name my-3'>
              <label htmlFor="name">Name</label>
              <input
                className='form-control'
                value={formData.name}
                type="text"
                id='name'
                onChange={handleChange}
                required
              />
            </div>
            <div className='email my-3'>
              <label htmlFor="email">Email</label>
              <input
                className='form-control'
                value={formData.email}
                type="email"
                id='email'
                onChange={handleChange}
                required
              />
            </div>
            <div className='password my-3'>
              <label htmlFor="password">Password</label>
              <input
                className='form-control'
                value={formData.password}
                type="password" 
                id='password'
                onChange={handleChange}
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

        <div className="col-md-4">
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
