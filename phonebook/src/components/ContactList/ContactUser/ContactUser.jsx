import React from "react";
import PropTypes from "prop-types";
import s from './ContactUser.module.css'


const ContactUser = ({ id, name, number, onDeleteContacts }) => {
  return (
    <li className={s.contactItem}>
      <span className={s.name}>{name}</span>
      <span className={s.phone}>{number}</span>
      <button
        className={s.btnDelete}
        type="button"
        onClick={() => onDeleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactUser;

ContactUser.propTypes = {
  onDeleteContacts: PropTypes.func.isRequired,
};