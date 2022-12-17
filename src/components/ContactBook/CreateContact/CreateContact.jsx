import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast'
import { addNewContact, fetchContacts } from 'redux/contactBook/operations';
import { getStateContactsUsers } from 'redux/contactBook/selectors';
import { Layout } from './Layout';

export function CreateContact() {
  const dispatch = useDispatch();
  const { items } = useSelector(getStateContactsUsers);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeState = e => {
    e.preventDefault();
    const newUserCard = {
      name: name,
      number: number,
    };
    handlerChangeState(newUserCard);
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerChangeState = newContact => {
    const { name, number } = newContact;
    const findSameContactInBase = items.find(
      item =>
        item.name.toLowerCase().includes(name.toLowerCase()) &&
        item.number.toLowerCase().includes(number.toLowerCase())
    );
    //если совпадает фамилия, номер телефона и электронная почта выдать сообщение
    if (findSameContactInBase) {
      toast.error('Already in DataBase', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      });
    } else {
      dispatch(addNewContact(newContact));
      toast.success('Contact is created', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
      });
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Layout
      onChangeState={onChangeState}
      name={name}
      setName={setName}
      number={number}
      setNumber={setNumber}
    />
  );
}

CreateContact.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }),
};
