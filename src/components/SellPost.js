import React from 'react';

export const SellPost = ({ userID,userProfileURL, datePost,title, description, price, size, gender, quantity, picUrl, category }) => {
  return (
    <div className="card mb-3">
      
      <div className="row g-0">
        <div className="col-md-6">
          <div className="card-img-container" style={{ height: '100%' }}>
            <img src={picUrl} className="card-img-top img-fluid" alt="Product" style={{ height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-md-6">
        <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={userProfileURL} alt="User Profile" className="rounded-circle me-2" style={{ width: '32px', height: '32px' }} />
          <div>{userID}</div>
        </div>
        <div>{datePost}</div>
      </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Description: {description}</p>
            <p className="card-text">Price: ${price}</p>
            <p className="card-text">Size: {size}</p>
            <p className="card-text">Gender: {gender}</p>
            <p className="card-text">Quantity: {quantity}</p>
            <p className="card-text">Category: <span className="badge bg-primary">{category}</span></p>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="quantityDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Quantity
              </button>
              <ul className="dropdown-menu" aria-labelledby="quantityDropdown">
                {[1, 2, 3, 4, 5].map((num) => (
                  <li key={num}><button className="dropdown-item" type="button">{num}</button></li>
                ))}
              </ul>
            </div>
            <button type="button" className="btn btn-primary mt-2">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
   );
};
