import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={css.contactWrapper}>
      <div className={css.wrapper}>
        <FaUser className={css.icon} />
        <h3 className={css.name}>{name}</h3>
      </div>
      <div className={css.wrapper}>
        <FaPhoneAlt className={css.icon} />
        <p className={css.number}>{number}</p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
