import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactListWrap}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            contactName={contact.name}
            contactNumber={contact.number}
            contactId={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
