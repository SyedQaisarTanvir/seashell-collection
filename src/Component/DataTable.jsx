import Table from "react-bootstrap/Table";
import Axios from "axios";
import { useEffect, useRef, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddEditForm from "./AddEditForm";

function DataTable() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [selectedSeashell, setSelectedSeashell] = useState({});
  const [editToggle, setEditToggle] = useState(false);
  const [addToggle, setAddToggle] = useState(false);

  useEffect(() => {
    console.log("Fetching Data....");
    const fetchData = async () => {
      const response = await Axios.get("http://localhost:3000/seashells");
      setData(response.data);
    };
    fetchData();
  }, [data]);

  const handleClose = () => setShow(false);

  const onCLickDelete = (id) => {
    setShow(true);
    setDeleteId(id);
  };

  const handleDeleteItem = async (deleteId) => {
    await Axios.delete(`http://localhost:3000/seashells/${deleteId}`);
    setData(data);
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>You want to delete this data forever?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDeleteItem(deleteId)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {data.length === 0 ? (
        <p>Currently Seaeshell is empty! Add the new Item.</p>
      ) : (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{
            width: "55%",
            marginLeft: 50,
            marginTop: 35,
            borderColor: "rgba(220, 235, 240, 0.8)",
            height: "auto",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "20px" }}>#</th>
              <th style={{ padding: "20px" }}>Name</th>
              <th style={{ padding: "20px" }}>Species</th>
              <th style={{ padding: "20px" }}>Description</th>
              <th style={{ padding: "20px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((seashell) => {
              const { id, name, species, description } = seashell;
              return (
                <tr key={id}>
                  <td style={{ padding: "20px" }}>{id}</td>
                  <td style={{ padding: "20px" }}>{name}</td>
                  <td style={{ padding: "20px" }}>{species}</td>
                  <td style={{ padding: "20px" }}>{description}</td>
                  <td style={{ padding: "20px" }}>
                    <Button
                      variant="warning"
                      onClick={() => {
                        setEditToggle(true);
                        setAddToggle(false);
                        setSelectedSeashell(seashell);
                      }}
                    >
                      Edit
                    </Button>{" "}
                  </td>
                  <td style={{ padding: "20px" }}>
                    {" "}
                    <Button variant="danger" onClick={() => onCLickDelete(id)}>
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
      <Button
        variant="primary"
        style={{ marginTop: "20px", marginLeft: "-70rem" }}
        onClick={() => {
          setAddToggle(true);
          setEditToggle(false);
        }}
      >
        Add Item
      </Button>
      {editToggle && (
        <AddEditForm
          form_name="Edit Item"
          button_name="Edit"
          editToggle={editToggle}
          setEditToggle={setEditToggle}
          setAddToggle={setAddToggle}
          data={selectedSeashell}
        />
      )}

      {addToggle && (
        <AddEditForm
          form_name="Add Item"
          button_name="Add"
          addToggle={addToggle}
          setAddToggle={setAddToggle}
          setEditToggle={setEditToggle}
          data={""}
        />
      )}
    </>
  );
}

export default DataTable;
