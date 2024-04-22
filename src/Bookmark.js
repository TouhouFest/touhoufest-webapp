import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { COOKIE_NAME, get_cookie_list, cookies, cookie_parameters } from "./Utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Bookmark({index}) {
  const [starType, setStarType] = useState(faStar);


  function handleOnClick(){
    let current_cookie_list = get_cookie_list();
    if(starType === faStar){ // add cookie
      current_cookie_list.push(index);
      cookies.set(COOKIE_NAME, current_cookie_list.join(","), cookie_parameters);
      setStarType(fasStar);
    }
    else{ // remove cookie
      let cookie_idx_rm = current_cookie_list.indexOf(index.toString());
      if (cookie_idx_rm > -1){
        current_cookie_list.splice(cookie_idx_rm, 1);
      }
      cookies.set(COOKIE_NAME, current_cookie_list.join(","), cookie_parameters);
      setStarType(faStar);
    }
  } 

  useEffect(function(){
    let current_cookie_list = get_cookie_list();
    if(current_cookie_list.indexOf(index.toString()) > -1){
      setStarType(fasStar);
    }
  })


  return (<FontAwesomeIcon onClick = {handleOnClick} icon={starType} size="lg" />);
}