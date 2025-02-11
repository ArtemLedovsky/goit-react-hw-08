import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import s from "./App.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contactsSlice";

const App = () => {
  const isLoading = useSelector(selectLoading);
  const errorMessage = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>Something went wrong...</p>}
      <ContactList />
    </div>
  );
};

export default App;
