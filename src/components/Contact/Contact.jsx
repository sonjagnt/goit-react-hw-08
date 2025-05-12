import { useDispatch } from "react-redux";
import { deleteContact, updContact } from "../../redux/contacts/operations";
import { Modal, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import { UpdateContactForm } from "../UpdateContactForm/UpdateContactForm";

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

  const [showUpdModal, setShowUpdModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
  };

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <Button onClick={() => setShowDeleteModal(true)} variant="contained">
        Delete
      </Button>
      {showDeleteModal && (
        <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
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
      <Button onClick={() => setShowUpdModal(true)}>Edit</Button>

      <Modal open={showUpdModal} onClose={() => setShowUpdModal(false)}>
        <UpdateContactForm
          contact={contact}
          onClose={() => setShowUpdModal(false)}
        />
      </Modal>
    </div>
  );
}

export default Contact;
