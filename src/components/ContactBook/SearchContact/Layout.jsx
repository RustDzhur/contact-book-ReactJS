import { useSelector } from 'react-redux';
import {
  Wrapper,
  Header,
  HeadContainer,
  HeaderTest,
  SearchLabel,
  InputSearch,
  MyContacts,
  FaceContact,
  ListItem,
  FirstName,
  NameContainer,
  ContactContainer,
  InputCheckBox,
  CreateButton,
} from './SearchContact.styled';
import manContact from 'images/manContact.png';
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
        <HeadContainer>
          <HeaderTest>Search contacts</HeaderTest>
          <CreateButton onClick={handelDeleteContact}>Delete</CreateButton>
        </HeadContainer>
        <form>
          <SearchLabel>
            <InputSearch
              type="text"
              placeholder="search contact"
              onChange={handlFilterContacts}
            />
          </SearchLabel>
        </form>
      </Header>
      <MyContacts>My contacts</MyContacts>
      {isLoading === 'rejected' && (
        <p> Somthing went wrong {error}, try again</p>
      )}
      {isLoading === 'loading' && <Spinner />}
      {isLoading === 'resolved' && (
        <ul>
          {filterContacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <FaceContact src={manContact} alt="face" />
              <ContactContainer>
                <NameContainer>
                  <FirstName>{name}</FirstName>
                  <p>{number}</p>
                </NameContainer>
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
          ))}
        </ul>
      )}
    </Wrapper>
  );
};
