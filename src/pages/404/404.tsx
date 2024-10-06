import { Link } from 'react-router-dom';
import cl from './404.module.scss';

const Page404=()=> {
  return (
    <div className={cl.wrap}>
      <div className={cl.content}>
        <h1 className={cl.title}>404</h1>
        <p className={cl.text}>Страница не найдена</p>
        <Link className={cl.link} to={'/'}>Вернуться на главную</Link>
      </div>
    </div>
  )
};

export default Page404;