import styled from '@emotion/styled';

export const Wrapper = styled.div`
position:relative;
  width: 320px;
  height: 537px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding-bottom: 30px;
  margin-bottom: 20px;
  margin-right:20px;
  ${'' /* margin-right: 30px; */}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const HeaderTest = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
`;

export const CreateButton = styled.button`
  position: absolute;
  top: 20px;
  left: 235px;
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

export const Background = styled.div`
  background: #add100; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #7b920a,
    #add100
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150px;
  color: #fff;

  margin-bottom: 30px;
`;

export const CardForm = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25),
    3px 6px 6px rgba(67, 67, 67, 0.25);
  border-radius: 15px;
  width: 280px;
  height: 185px;
  text-align:center;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Input = styled.input`
    margin-left: 15px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
`

export const IconsUser = styled.div`
    color: #add100;
    font-size: 18px;
    
`

export const Label = styled.label`
    display: flex;
    justify-content: center;
`