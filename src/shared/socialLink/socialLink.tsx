import { HTMLAttributes } from 'react';
import cl from './socialLink.module.scss';

interface ISocialLink extends HTMLAttributes<HTMLAnchorElement> {
  srText: string;
  iconSource: string;
  href: string;
}
const SocialLink = ({ srText, iconSource, ...rest }: ISocialLink) => {
  return (
    <a className={cl.link} {...rest}>
      <span className="visually-hidden">{srText}</span>
      <svg className={cl.icon}>
        <use xlinkHref={iconSource} />
      </svg>
    </a>
  );
};

export default SocialLink;
