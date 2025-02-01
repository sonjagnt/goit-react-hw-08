import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Contact;
