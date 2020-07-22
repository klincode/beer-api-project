import styled from 'styled-components';
import { Image } from './Image';
import { Title } from './Title';
import { Subtitle } from './Subtitle';

const Item = styled.div`
  flex-basis:33.333%;
  padding:10px 10px;
  box-shadow:0 0 4px -2px ${props => props.theme.shadow};
  background-color:${props => props.theme.primaryColor};

`
Item.Image = Image;
Item.Title = Title;
Item.Subtitle = Subtitle;

export default Item;