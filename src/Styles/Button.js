
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
    &:hover{
      background: #0e0c0a;
    }
  `}

  ${props => props.lg && css`
    padding: 24px 36px;
    font-size: 16px;
    letter-spacing: 4px;
  `}
`;

export const ButtonGhost = styled(Button)`
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  &:focus{
    outline: 0;
  }  
  &:hover{
    background-color: white;
    color: #302D2A;
  }
`;

export const ButtonGhostLink = styled.a`
  font-size: 13.5px;
  text-transform: uppercase;
  padding: 8px 36px;
  font-weight: 600;
  color: white;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  border: 0;
  border: 2px solid white;
  background-color: transparent;
  cursor: pointer;
  white-space: nowrap;
  &:focus{
    outline: 0;
  }  

  &:hover{
    background-color: white;
    color: #302D2A !important;
  }
`;


export const ButtonLink = styled.a`
  font-size: 13.5px;
  text-transform: uppercase;
  padding: 8px 36px;
  font-weight: 600;
  color: white;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  border: 0;
  white-space: nowrap;
  &:focus{
    outline: 0;
  }  

  ${props => props.black && css`
    background: #302D2A;
    &:hover{
      background: #0e0c0a;
      color: white;
    }
  `}

  ${props => props.lg && css`
    padding: 24px 36px;
    font-size: 16px;
    letter-spacing: 4px;
  `}
`;
