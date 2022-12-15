import {
  Wrapper,
  Header,
  HeaderTest,
  CreateButton,
  Background,
  CardForm,
  Input,
  IconsUser,
  Label,
} from './CreateContact.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';

export const Layout = ({
  onChangeState,
  firstName,
  setFirstName,
  secondName,
  setSecondName,
  phoneNum,
  setPhoneNum,
  email,
  setEmail,
}) => {
  return (
    <Wrapper>
      <Header>
        <HeaderTest>Create new contact</HeaderTest>
      </Header>
      <Background>
        <FontAwesomeIcon icon={faUser} />
      </Background>
      <CardForm>
        <form onSubmit={onChangeState}>
          <CreateButton type="submit">Save</CreateButton>
          <Label>
            <IconsUser>
              <FontAwesomeIcon icon={faUser} />
            </IconsUser>
            <Input
              type="text"
              name="firstName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="First name"
              autoComplete="off"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              required
            />
          </Label>
          <br />
          <Label>
            <IconsUser>
              <FontAwesomeIcon icon={faUser} />
            </IconsUser>
            <Input
              type="text"
              name="secondName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Second name"
              autoComplete="off"
              value={secondName}
              onChange={event => setSecondName(event.target.value)}
              required
            />
          </Label>
          <br />
          <Label>
            <IconsUser>
              <FontAwesomeIcon icon={faPhone} />
            </IconsUser>
            <Input
              type="tel"
              name="phoneNum"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="Phone"
              value={phoneNum}
              onChange={event => setPhoneNum(event.target.value)}
              autoComplete="off"
              required
            />
          </Label>
          <br />
          <Label>
            <IconsUser>
              <FontAwesomeIcon icon={faMailBulk} />
            </IconsUser>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
          </Label>
          <br />
        </form>
      </CardForm>
    </Wrapper>
  );
};
