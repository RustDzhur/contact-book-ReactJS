import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, fetchContacts } from '../../redux/operations';
import { Layout } from './Layout';

export function CreateContact() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.user.contacts);
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');

  const onChangeState = e => {
    e.preventDefault();
    const newUserCard = {
      firstName: firstName,
      secondName: secondName,
      phoneNum: phoneNum,
      email: email,
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
    const { firstName, phoneNum, email } = newContact;
    const findSameContactInBase = items.find(
      item =>
        item.firstName.toLowerCase().includes(firstName.toLowerCase()) ||
        item.phoneNum.toLowerCase().includes(phoneNum.toLowerCase()) ||
        item.email.toLowerCase().includes(email.toLowerCase())
    );
    //если совпадает фамилия, номер телефона и электронная почта выдать сообщение
    if (findSameContactInBase) {
      alert(
        `${
          findSameContactInBase.firstName +
          ' ' +
          findSameContactInBase.secondName
        } is already in DB`
      );
    } else {
      dispatch(addNewContact(newContact));
    }
  };

  const resetForm = () => {
    setFirstName('');
    setSecondName('');
    setPhoneNum('');
    setEmail('');
  };

  return (
    <Layout
      onChangeState={onChangeState}
      firstName={firstName}
      setFirstName={setFirstName}
      secondName={secondName}
      setSecondName={setSecondName}
      phoneNum={phoneNum}
      setPhoneNum={setPhoneNum}
      email={email}
      setEmail={setEmail}
    />
  );
}

CreateContact.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};
