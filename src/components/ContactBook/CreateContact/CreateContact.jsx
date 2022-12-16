import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, fetchContacts } from 'redux/contactBook/operations';
import {getStateContactsUsers} from 'redux/contactBook/selectors'
import { Layout } from './Layout';

export function CreateContact() {
  const dispatch = useDispatch();
  const { items } = useSelector(getStateContactsUsers);
  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');

  const onChangeState = e => {
    e.preventDefault();
    const newUserCard = {
      name: name,
      phoneNum: phoneNum,
    };
    handlerChangeState(newUserCard);
    resetForm();
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (items.length === 0) {
    return;
  }

  const handlerChangeState = newContact => {
    const { name, phoneNum } = newContact;
    const findSameContactInBase = items.find(
      item =>
        item.name.toLowerCase().includes(name.toLowerCase()) ||
        item.phoneNum.toLowerCase().includes(phoneNum.toLowerCase())
    );
    //если совпадает фамилия, номер телефона и электронная почта выдать сообщение
    if (findSameContactInBase) {
      alert(
        `${
          findSameContactInBase.name +
          ' ' +
          findSameContactInBase.phoneNum
        } is already in DB`
      );
    } else {
      dispatch(addNewContact(newContact));
    }
  };

  const resetForm = () => {
    setName('');
    setPhoneNum('');
  };

  return (
    <Layout
      onChangeState={onChangeState}
      name={name}
      setName={setName}
      phoneNum={phoneNum}
      setPhoneNum={setPhoneNum}
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
