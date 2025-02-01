import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
const ContactList = lazy(() =>
  import("../../components/ContactList/ContactList")
);
const SearchBox = lazy(() => import("../../components/SearchBox/SearchBox"));
const ContactForm = lazy(() =>
  import("../../components/ContactForm/ContactForm")
);

function ContactsPage() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Suspense>
    </div>
  );
}

export default ContactsPage;
