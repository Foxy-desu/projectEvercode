import parse from 'html-react-parser';

export function breakLine(string:string){
  const splitStr = string.split(' ');
  const unParsed: Array<string> = [];
  if(splitStr.length >2 || (splitStr.every((el)=> el.length > 3) && splitStr.length === 2)){
    splitStr.forEach((el, index, arr)=> {
      if(index === arr.length-1){
        unParsed.push('<br/>');
      }
      unParsed.push(el)
    })
  } else {
    return string;
  }
  
  return parse(unParsed.join(' '));
};

export function parseHTML(string:string){
  return parse(string);
};

export  function blockScroll(isBurgerOpen:boolean){
  isBurgerOpen
  ? document.documentElement.style.position="fixed"
  : document.documentElement.style.position="initial";
};