import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 320px;
  height: 537px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar-thumb {
    background-color: #add100;
    outline: 1px solid #add100;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 100px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;
  padding: 24px 20px;
  ${'' /* padding-bottom: 24px; */}
`;

export const HeaderTest = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  margin-bottom: 25px;
`;

export const InputSearch = styled.input`
  border-radius: 10px;
  border-color: #add100;
  padding: 0 10px;
  width: 80%;
  height: 20px;
  outline: none;
`;

export const MyContacts = styled.div`
  font-family: sans-serif;
  margin-bottom: 15px;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const EmailContainer = styled.div`
  ${'' /* padding-left: 59px; */}
`;
export const FaceContact = styled.img`
  width: 35px;
  border-radius: 50%;
  margin-left: 24px;
  margin-right: 10px;
`;

export const FirstName = styled.p`
  margin-right: 8px;
  font-weight: 700;
`;
export const SecondName = styled.p`
  margin-right: 8px;
  font-weight: 700;
`;

export const EmailText = styled.p``;

export const InputCheckBox = styled.input`
  transform: scale(1.5);
  position: absolute;
  right: 20px;
`;

export const CreateButton = styled.button`
  position: absolute;
  top: 140px;
  left: 215px;
  background-image: linear-gradient(
    to right,
    #1fa2ff 0%,
    #12d8fa 51%,
    #1fa2ff 100%
  );

  padding: 4px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: none;
  display: block;
  cursor: pointer;

  :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;
