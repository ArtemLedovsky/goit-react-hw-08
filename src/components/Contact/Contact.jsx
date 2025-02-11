import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contact}>
      <div>
        <p className={s.text}>
          <FaUserLarge />
          {contactName}
        </p>
        <p className={s.text}>
          <FaPhone />
          {contactNumber}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(contactId))}>Delete</button>
    </div>
  );
};

export default Contact;
