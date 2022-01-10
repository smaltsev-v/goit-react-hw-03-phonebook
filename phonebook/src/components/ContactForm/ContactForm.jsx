import React, { Component } from "react";
import s from './ContactForm.module.css'


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handelChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state)
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handelSubmit}>
        <label className={s.labelForm}>
          Name{" "}
          <input
          className={s.input}  
            type="text"
            name="name"
            value={name}
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.labelForm} >
          Number{" "}
          <input 
          className={s.input}  
            type="tel"
            name="number"
            value={number}
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.btnAddContact}  type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;