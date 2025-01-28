import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

export const ContactList = () => {
  // const filter = useSelector((state) => state.filters.name);
  // const contacts = useSelector((state) => state.contacts.items);
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s["contact-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={s["contact-list-item"]}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
