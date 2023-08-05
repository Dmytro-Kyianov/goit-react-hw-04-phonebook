import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const name = e.target.name;
    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault(e);
    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : addContact(name, number);
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();
  const numberImputId = nanoid();
  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.nameInput}>
          <label htmlFor={nameInputId} className={css.label}>
            Name
          </label>
          <input
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={css.input}
          />
        </div>
        <div className={css.numberInput}>
          <label htmlFor={numberImputId} className={css.label}>
            Number
          </label>
          <input
            id={numberImputId}
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.input}
          />
        </div>

        <button type="submit" className={css.btnAddContact}>
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};