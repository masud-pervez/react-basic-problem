import React from 'react'

const PricingCard = ({ data }) => {
  return (
    <div className='col-4'>
        <div className={`card ${data.borderStyle}`}>
        <div className={`card-header h5 ${data.headerStyle}`}>
          {data.headerTitle}
        </div>
        <div className="card-body text-center">
            <div><span className='h4 fw-bold'>${data.price}</span><span className='text-muted'>/mo</span></div>
            <div className='my-3'>
            <div>{data.users} users included</div>
            <div>{data.storage} GB of storage</div>
            <div>{data.support}</div>
            {data.helpCenterAccess && <div>Help center access</div>}
            </div> 
            <div className=''>
            <button className={`btn ${data.buttonStyle}`}>{data.buttonTitle}</button>
            </div>                 
        </div>
        </div>
    </div>
  )
}

export default PricingCard