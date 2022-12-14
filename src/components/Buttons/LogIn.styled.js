import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const SignIn = styled(NavLink)`
background-image: linear-gradient(
  to right,
  #1d976c 0%,
  #93f9b9 51%,
  #1d976c 100%
);
padding: 15px 45px;
text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;

:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
@media screen and (max-width: 340px){
  padding: 15px 25px;
}
`;
