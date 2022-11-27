import Main from './Main';
import Image from './Image';
import Title from './Title';
import SubTitle from './SubTitle';
import Emphasis from './Emphasis';

const TitleWithImage = Object.assign(Main, {
  Image,
  Title,
  SubTitle,
  Emphasis,
});
export default TitleWithImage;
