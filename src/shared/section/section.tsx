import { forwardRef } from 'react';
import { parseHTML } from '../utils/helpers';
import cl from './section.module.scss';

interface ISection {
  sectionTitle?: string;
  children: React.ReactNode;
};
export type TRef = HTMLHeadingElement;

const Section = forwardRef<TRef, ISection>(({children, sectionTitle},ref)=> {
  return (
    <section className={cl.section}>
      {sectionTitle && <h2 className={cl.title} ref={ref}>{parseHTML(sectionTitle)}</h2>}
      {children}
    </section>
  )
});

export default Section;