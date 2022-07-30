import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings as SliderSettings } from 'react-slick';

export default function NextSlider(props: SliderSettings) {
  return <Slider {...props} />;
}
