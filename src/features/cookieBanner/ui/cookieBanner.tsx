import cl from './cookieBanner.module.scss';

interface CookieBanner {
  acceptCookie: () => void;
}
const CookieBanner = ({ acceptCookie }: CookieBanner) => {
  return (
    <div className={cl.bannerWrap}>
      <div className={cl.banner}>
        <p className={cl.bannerMessage}>
          Для улучшения работы сайта и его взаимодействия с пользователем мы используем файлы cookie. Продолжая работу с
          сайтом, Вы разрешаете использование cookie-файлов.
        </p>
        <button className={cl.btn} onClick={acceptCookie}>
          ок
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
