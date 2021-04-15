
import styled , { css }from 'styled-components'

export const Button = styled.button`
  font-size: 13.5px;
  text-transform: uppercase;
  padding: 8px 36px;
  font-weight: 600;
  color: white;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  border: 0;

  &:focus{
    outline: 0;
  }  

  ${props => props.black && css`
    background: #302D2A;
  `}

  ${props => props.lg && css`
    padding: 24px 36px;
    font-size: 16px;
    letter-spacing: 4px;
  `}
`;

export const ButtonGhost = styled(Button)`
  border: 2px solid #302D2A;
  color: #302D2A;
  background-color: transparent;
  cursor: pointer;
  margin-left: 48px;
  &:focus{
    outline: 0;
  }  
  &:hover{
    background-color: #302D2A;
    color: white;
  }
  @media (max-width: 480px) {
      margin: 30px 0;
      }
`;
