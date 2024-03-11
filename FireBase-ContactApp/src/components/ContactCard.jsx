import { deleteDoc, doc } from "firebase/firestore";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
// import { useState } from "react";

const ContactCard = ({contact}) => {
  const {isOpen, onClose, onOpen} = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Succesfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div
      key={contact.id}
      className="bg-pale-yellow flex justify-between items-center rounded-lg p-2 ">

      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-4xl text-custom-orange" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>

      </div>

      <div className="flex text-3xl">
      <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
      <IoMdTrash 
        onClick={() => deleteContact(contact.id)} 
        className="text-custom-orange cursor-pointer" />

      </div>
    </div>

        <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />

    </>
  );
};

export default ContactCard;
