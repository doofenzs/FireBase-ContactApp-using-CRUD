import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {collection, getDocs, onSnapshot,snapshotEqual,} from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) => 
        contact.name.toLowerCase().includes(value.toLowerCase())
      );  

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4 ">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex items-center flex-grow">
            <CiSearch className="text-white text-3xl absolute ml-1" />
            <input
            onChange={filterContacts}
              type="text"
              className="border bg-transparent
           border-white rounded-md h-10 flex-grow text-white pl-9"
            />
          </div>

          <FaCirclePlus
            onClick={onOpen}
            className="text-5xl text-white  cursor-pointer"
          />
        </div>

        <div className="mt-4 gap-3 flex flex-col">
  {contacts.length === 0 ? <NotFoundContact /> : contacts.map((contact) => (
    <ContactCard key={contact.id} contact={contact} />
  ))}
</div>

      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
