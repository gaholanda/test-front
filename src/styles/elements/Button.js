import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: auto;
  width: 100%;
  max-width: 340px;
  padding: 20px 0;
  background: ${({ disabled }) => disabled ? '#CCC' : '#FF6C00'};
  box-shadow: ${
    props =>
    props.disabled ?
    'inset 0 -3px 0 0 #CCC, 0 2px 4px 0 rgba(0,0,0,0.25)' :
    'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)'
  };
  border: none;
  border-radius: 3px;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-decoration: none;

  &:hover{
    background: #D45A00;
  }
`;

export default Button;