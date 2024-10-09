import { HTMLAttributes } from 'react';
import { parseHTML } from '../utils/helpers';
import cl from './section.module.scss';

interface ISection extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string;
  children: React.ReactNode;
}
export type TRef = HTMLHeadingElement;

const Section = ({ children, sectionTitle, className, ...rest }: ISection) => {
  return (
    <section className={className ? className : cl.section} {...rest}>
      {sectionTitle && <h2 className={cl.title}>{parseHTML(sectionTitle)}</h2>}
      {children}
    </section>
  );
};

export default Section;
