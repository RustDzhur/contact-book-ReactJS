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
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

export const Layout = ({
  onChangeState,
  name,
  setName,
  number,
  setNumber,
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
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Full name"
              autoComplete="off"
              value={name}
              onChange={event => setName(event.target.value)}
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
              value={number}
              onChange={event => setNumber(event.target.value)}
              autoComplete="off"
              required
            />
          </Label>
          <br />
        </form>
      </CardForm>
    </Wrapper>
  );
};
