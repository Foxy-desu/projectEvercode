import cl from './roundBtn.module.scss';
interface IRoundBtn extends React.HTMLAttributes<HTMLButtonElement> {
  prompt: string;
  purpose?: 'slideControl' | 'expandControl'
}

const RoundBtn =({purpose='slideControl',prompt,...props}:IRoundBtn)=> {
  const btnStyle = `${cl.btn} ${purpose === 'slideControl' ? cl.btn_slide : cl.btn_expand}`
  return (
    <button className={btnStyle} type='button' {...props}>
      <span className='visually-hidden'>{prompt}</span>
    </button>
  )
};

export default RoundBtn;