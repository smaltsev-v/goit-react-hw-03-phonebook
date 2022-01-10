import React from "react";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";
import ContactUser from "./ContactUser";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactUser
            key={id}
            name={name}
            number={number}
            onDeleteContacts={onDeleteContacts}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default ContactList;