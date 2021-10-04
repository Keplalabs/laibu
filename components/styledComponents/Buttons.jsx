
import styled from 'styled-components'

export const Button = styled.button`
  background:linear-gradient( #0910D0,#76059E);
color:#fff;
border-radius:10px;
transition: all 0.2s ease-in-out;
border: none; /* Remove borders */
padding: 5px 15px; /* Some padding */
font-size: 14px; /* Set a font-size */
&:hover{
  transform:scale(1.05);
  cursor:pointer;
}
`;
export const LoginButton = styled.button`
  background:linear-gradient(45deg, #0910D0,#76059E);
  color:#fff;
  border-radius:10px;
  border: none; /* Remove borders */
  transition: all 0.2s ease-in-out;
  padding:15px; /* Some padding */
  font-size: 14px; /* Set a font-size */
  &:hover{
    transform:scale(1.05);
    cursor:pointer;
}
 `;