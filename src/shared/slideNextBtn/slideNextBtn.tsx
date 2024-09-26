import { ButtonHTMLAttributes } from 'react';
import cl from './slideNextBtn.module.scss';

const SlideNextBtn =({...props}: ButtonHTMLAttributes<HTMLButtonElement>)=> {
  return (
    <button className={cl.btn} {...props}>
      <span className={cl.text}>Далее</span>
    </button>
  )
}

export default SlideNextBtn;