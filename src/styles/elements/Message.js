import styled from 'styled-components';

const Message = styled.p`
  color: ${({ color }) => color ? color : '#000'};
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '12px'};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : 'normal'};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  text-transform: uppercase;
  margin: ${({ margin }) => margin ? margin : 'auto'};
`

export default Message;