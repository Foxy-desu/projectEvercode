import { HTMLAttributes, forwardRef } from 'react';
import { parseHTML } from '../utils/helpers';
import cl from './section.module.scss';

interface ISection extends HTMLAttributes<HTMLDivElement> {
  sectionTitle?: string;
  children: React.ReactNode;
};
export type TRef = HTMLHeadingElement;

const Section = forwardRef<TRef, ISection>(({children, sectionTitle, className,...rest},ref)=> {
  return (
    <section className={`${cl.section} ${className && className}`} {...rest}>
      {sectionTitle && <h2 className={cl.title} ref={ref}>{parseHTML(sectionTitle)}</h2>}
      {children}
    </section>
  )
});

export default Section;