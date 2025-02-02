import { useDispatch } from "react-redux";
import { deleteContact, updContact } from "../../redux/contacts/operations";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useState } from "react";

function Contact({ contact }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
  };
  // const handleEdit = () => {
  //   dispatch(updContact(contact.id));
  // };
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <Button onClick={() => setShowModal(true)} variant="contained">
        Delete
      </Button>
      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ marginBottom: "12px" }}
            >
              Are you sure you want to delete this Contact?
            </Typography>
            <div
              style={{ display: "flex", gap: "12px", justifyContent: "center" }}
            >
              <Button type="button" onClick={handleDelete} variant="contained">
                Yes
              </Button>
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                variant="contained"
              >
                No
              </Button>
            </div>
          </Box>
        </Modal>
      )}
      {/* <button onClick={handleEdit}>Edit</button> */}
    </div>
  );
}

export default Contact;
