import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Quantity from "./Quantity";

export default function PointOfSale() {
  const [product, setProduct] = useState("");
  const [productDetails, setProductDetails] = useState([]);
  const [quantity,setQuantity] = useState(1)
  const handleChange = ({ target }) => {
    setProduct(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const maxId =
      productDetails.length < 1
        ? 0
        : Math.max(...[...productDetails].map((item) => item.id));

    if (product === "Ice-Cream") {
      const data = {
        id: maxId + 1,
        name: "Ice-Cream",
        cost: 15,
        code: "A4254",
        price: 0,
        quantity
      };
      const newProductDetails = [...productDetails, data];
      setProductDetails(newProductDetails);
    }

    if (product === "Cocolate") {
      const data = {
        id: maxId + 1,
        name: "Cocolate",
        cost: 10,
        code: "A4424",
        price: 0,
        quantity
      };
      const newProductDetails = [...productDetails, data];
      setProductDetails(newProductDetails);
    }

    if (product === "Cold-Drinks") {
      const data = {
        id: maxId + 1,
        name: "Cold-Drinks",
        cost: 25,
        code: "A4224",
        price: 0,
        quantity
      };
      const newProductDetails = [...productDetails, data];
      setProductDetails(newProductDetails);
    }
    setProduct("");
    // setQuantity(1)
  };

  const childToParent = (data) => {
    setQuantity(data);
  }
  const handleDelete = (id) => {
    const newProductDetails = productDetails.filter((item, idx) => idx !== id);
    setProductDetails(newProductDetails);
  };

  return (
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-10">
          <div className="card">
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <label htmlFor="product" className="form-label">
                  Product
                </label>
                <select
                  className="form-select form-select-sm w-25"
                  id="product"
                  onChange={handleChange}
                >
                  <option value="">Select Product</option>
                  <option value="Ice-Cream">Ice-Cream</option>
                  <option value="Cocolate">Cocolate</option>
                  <option value="Cold-Drinks">Cold-Drinks</option>
                </select>
                <button type="submit" className="btn btn-info mt-4">
                  Add to cart
                </button>
              </form>
              {productDetails.length > 0 ? (
                <table className="table table-striped table-hover mt-5 text-center">
                  <thead>
                    <tr>
                      <th>#ID</th>
                      <th>Product Name</th>
                      <th>Product Code</th>
                      <th>Cost</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productDetails.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.code}</td>
                        <td>{item.cost}</td>
                        <td>{item.quantity} <Quantity childToParent={childToParent}/> </td>
                        <td>{item.cost * item.quantity}</td>
                        <td>
                          <AiOutlineDelete
                            className="delete-btn fs-4"
                            onClick={() => handleDelete(idx)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-danger w-25 mt-5">
                  Please Select Items
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
