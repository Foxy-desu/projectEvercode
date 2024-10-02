import { forwardRef } from 'react';
import cl from './roundBtn.module.scss';
interface IRoundBtn extends React.HTMLAttributes<HTMLButtonElement> {
  prompt: string;
  purpose?: 'slideControl' | 'expandControl'
}

const RoundBtn =forwardRef<HTMLButtonElement, IRoundBtn>(({purpose='slideControl',prompt,...props}:IRoundBtn, ref)=> {
  const btnStyle = `${cl.btn} ${purpose === 'slideControl' ? cl.btn_slide : cl.btn_expand}`
  return (
    <button className={btnStyle} type='button' {...props} ref={ref}>
      <span className='visually-hidden'>{prompt}</span>
    </button>
  )
});

export default RoundBtn;