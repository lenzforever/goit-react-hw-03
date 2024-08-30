import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.listWrapper}>
      {contacts.map((contact) => {
        return (
          <Contact
            onDeleteContact={onDeleteContact}
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
