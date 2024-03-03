import Cookies from 'universal-cookie';
export let colors = ["purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","black","silver","gray", "aqua"];

export const COOKIE_NAME = "BOOKMARKS";

let today = new Date();
today.setDate(today.getDate() + 30);
export const cookie_parameters = {expires: today, sameSite:"lax"}
export const cookies = new Cookies();

export function get_cookie_list(){
    let current_cookie_list = cookies.get(COOKIE_NAME);
    if(current_cookie_list === undefined){
        current_cookie_list = [];
    }
    else{
        current_cookie_list = current_cookie_list.split(",");
        if(current_cookie_list.includes("")){
            current_cookie_list.splice(current_cookie_list.indexOf(""),1);
        }
    }
    return current_cookie_list;
}

export function cmp(a,b) {return a > b;}
