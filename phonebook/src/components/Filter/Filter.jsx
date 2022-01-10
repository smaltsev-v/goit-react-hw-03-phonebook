import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filter}>
      <label className={s.labelForm}>
        Find contacts by name
        <input
          className={s.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};


export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};