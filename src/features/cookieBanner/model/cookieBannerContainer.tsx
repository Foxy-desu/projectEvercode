import { useState } from "react";
import CookieBanner from "../ui/cookieBanner";

const CookieBannerContainer =()=> {
  const [cookie, setCookie] = useState(checkCookieInLS);
  
  function checkCookieInLS(){
    return localStorage.getItem('accepted_cookies') === 'yes';
  };
  function setCookieToLS(){
    localStorage.setItem('accepted_cookies', 'yes');
  };
  function setCookieAccepted(){
    setCookieToLS();
    setCookie(true);
  };
  return (
    <>
      {!cookie && (
        <div>
          <CookieBanner acceptCookie={setCookieAccepted}/>
        </div>
      )}
    </>
  )
};

export default CookieBannerContainer;