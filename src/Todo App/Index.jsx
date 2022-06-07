import React, { useState } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { Button, Tooltip } from "antd";
import { FiSend } from "react-icons/fi";
import { GrUpdate } from "react-icons/gr";

export default function Index() {
  // all state defined here
  const [content, setContent] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [edited, setEdited] = useState(null);

  // all handle proseser will work here in the main root file
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleAdd = (event) => {

    if(!toggleSubmit){
      setItems(
        items.filter((elem) => {
          if (elem.id === edited) {
            return (elem.name = content);
          }
          return elem;
        })
      );
      setContent("");
    }else {
      setItems([...items, { id: uuidv4(), name: content }]);
      setContent("");
    }
    setToggleSubmit(true);
    event.preventDefault();
  };


  const handleDelete = (idx) => {
    const newItems = items.filter((item) => idx !== item.id);
    setItems(newItems);
  };

  const handleRemoveAll = () => {
    setItems([]);
    setToggleSubmit(true);
  };

  const handleEdit = (item) => {
    const newEditItem = items.find((elem) => {
      return elem.id === item;
    });
    setToggleSubmit(false);
    setContent(newEditItem.name);
    setEdited(item);
    
  };
  // return the DOM item
  return (
    <div
      className="row justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-md-5">
        <div className="card shadow bg-muted ">
          <div className="card-header">
            <h6 className="text-muted ms-4">&#128221; Add your list here</h6>
          </div>
          <div className="card-body px-5">
            <form autoComplete="off" onSubmit={handleAdd}>
              <div className="input-group mb-3">
                <input
                  required
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="&#x270D; write here"
                  value={content}
                  onChange={handleChange}
                />

                {toggleSubmit ? (
                  <Tooltip title="Submit" color="blue">
                    <button type="submit" className="btn btn-outline-primary">
                      <FiSend />
                    </button>
                  </Tooltip>
                ) : (
                  <Tooltip title="Update" color="blue">
                    <button type="submit" className="btn btn-outline-primary">
                      <GrUpdate />
                    </button>
                  </Tooltip>
                )}
              </div>
            </form>

            {items.length > 0 &&
              items.map((item) => (
                <Todo
                  key={item.id}
                  value={item.name}
                  idx={item.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))}

            <div className="text-center">
              <Button className="shadow-sm" onClick={handleRemoveAll}>
                Remove All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
