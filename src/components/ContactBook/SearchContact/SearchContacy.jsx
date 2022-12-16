import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Layout } from './Layout';
import { filterContact } from 'redux/contactBook/contactSlice';
import { deleteContacts } from 'redux/contactBook/operations';
import {getStateContactsUsers, filterContactsUsers} from 'redux/contactBook/selectors'

export function SearchContact() {
  const { items } = useSelector(getStateContactsUsers);
  const filterValue = useSelector(filterContactsUsers);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [ID, setID] = useState('');

  const handelCheckedContact = ID => {
    setChecked(true);
    setID(ID);
  };

  const handelDeleteContact = () => {
    if (checked) {
      dispatch(deleteContacts(ID));
    }
  };

  //Получение строки поиска контактов и запись в стэйт
  const handlFilterContacts = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  //Поиск контактов со стейта
  const normilizedFilter = filterValue.toLowerCase();
  const filterContacts = items.filter(
    contact =>
      contact.name.toLowerCase().includes(normilizedFilter));

  return (
    <Layout
      handelCheckedContact={handelCheckedContact}
      handelDeleteContact={handelDeleteContact}
      handlFilterContacts={handlFilterContacts}
      filterContacts={filterContacts}
      checked={checked}
    />
  );
}

SearchContact.propTypes = {
  state: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    ID: PropTypes.string.isRequired,
  }),
};
