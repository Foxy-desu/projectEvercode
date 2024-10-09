import cl from './loader.module.scss';
import loader from '../../app/assets/img/svg/loader.svg';
const Loader = () => {
  return (
    <div className={cl.loader}>
      <img src={loader} alt="Загрузка страницы" />
    </div>
  );
};

export default Loader;
