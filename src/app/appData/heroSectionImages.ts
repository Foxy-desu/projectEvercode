import { IHeroSectionProps } from "../../pages/main/ui/heroSection/heroSection";
import heroLg from '../assets/img/png/Main.png';
import heroSm from '../assets/img/png/Main (395).png';

export const heroImages:IHeroSectionProps['sectionImages'] = {
  big: {
    url: heroLg,
    width: 788,
  },
  small: {
    url: heroSm,
    width: 395,
  },
};