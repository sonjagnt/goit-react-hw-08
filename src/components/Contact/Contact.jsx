import { useDispatch } from "react-redux";
import { deleteContact, updContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  // const handleEdit = () => {
  //   dispatch(updContact(contact.id));
  // };
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* <button onClick={handleEdit}>Edit</button> */}
    </div>
  );
}

export default Contact;
