import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Layout } from './Layout';
import { filterContact } from '../../redux/contactSlice';
import { deleteContacts } from '../../redux/operations';

export function SearchContact() {
  const { items } = useSelector(state => state.user.contacts);
  const filterValue = useSelector(state => state.user.filter);
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
      contact.firstName.toLowerCase().includes(normilizedFilter) ||
      contact.secondName.toLowerCase().includes(normilizedFilter)
  );

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
