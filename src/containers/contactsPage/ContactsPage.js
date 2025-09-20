import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /* Define state variables for contact info and duplicate check */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  //❤️ check if it is duplicate when name changed
  useEffect(() => {
    const nameExists = contacts.some(contact => contact.name === name);
    setIsDuplicate(nameExists);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /* Using hooks, check for contact name in the contacts array variable in props */

  return (
    <div>
      <section>
        <h2>Add Contact
          {isDuplicate ? " -Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
