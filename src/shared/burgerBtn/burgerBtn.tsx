import cl from './burgerBtn.module.scss';

interface IBurgerBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBurgerOpen: boolean;
  colorScheme?: "light" | "dark";
}
const BurgerBtn =({colorScheme='dark', isBurgerOpen,...props}:IBurgerBtn)=>{
  const btnStyle = `${cl.burgerBtn} ${isBurgerOpen? cl.burgerBtn_opened: cl.burgerBtn_closed}`;
  const lineStyle = `${cl.line} ${colorScheme === "light"? cl.line_light : cl.line_dark}`
  return (
    <button className={btnStyle} {...props}>
      <span className='visually-hidden'>
        {isBurgerOpen? 'Закрыть меню':'Открыть меню'}
      </span>
        <span className={lineStyle}></span>
        <span className={lineStyle}></span>
        <span className={lineStyle}></span>
    </button>
  )
};

export default BurgerBtn;