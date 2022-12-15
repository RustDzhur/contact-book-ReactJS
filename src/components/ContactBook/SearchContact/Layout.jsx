import { useSelector } from 'react-redux';
import {
  Wrapper,
  Header,
  HeaderTest,
  InputSearch,
  MyContacts,
  FaceContact,
  ListItem,
  FirstName,
  SecondName,
  NameContainer,
  EmailText,
  EmailContainer,
  ContactContainer,
  InputCheckBox,
  CreateButton,
} from './SearchContact.styled';
import manContact from '../../images/manContact.png';
import { Spinner } from 'loader/spinner';

export const Layout = ({
  handelDeleteContact,
  handlFilterContacts,
  handelCheckedContact,
  filterContacts,
  checked,
}) => {
  const { isLoading, error } = useSelector(state => state.user.contacts);
  return (
    <Wrapper>
      <Header>
        <HeaderTest>Search contacts</HeaderTest>
        <CreateButton onClick={handelDeleteContact}>Delete</CreateButton>
        <form>
          <label>
            <InputSearch
              type="text"
              placeholder="search contact"
              onChange={handlFilterContacts}
            />
          </label>
        </form>
      </Header>
      <MyContacts>My contacts</MyContacts>
      {isLoading === 'rejected' && (
        <p> Somthing went wrong {error}, try again</p>
      )}
      {isLoading === 'loading' && <Spinner />}
      {isLoading === 'resolved' && (
        <ul>
          {filterContacts.map(
            ({ id, firstName, secondName, phoneNum, email }) => (
              <ListItem key={id}>
                <FaceContact src={manContact} alt="face" />
                <ContactContainer>
                  <NameContainer>
                    <FirstName>{firstName}</FirstName>
                    <SecondName>{secondName}</SecondName>
                  </NameContainer>
                  <EmailContainer>
                    <p>{phoneNum}</p>
                    <EmailText>{email}</EmailText>
                  </EmailContainer>
                </ContactContainer>
                <InputCheckBox
                  type="radio"
                  value={checked}
                  onChange={() => {
                    handelCheckedContact(id);
                  }}
                  name="checkContact"
                />
              </ListItem>
            )
          )}
        </ul>
      )}
    </Wrapper>
  );
};
