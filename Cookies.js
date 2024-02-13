/*
Cookies--> Small Strings of data stored directly in browser.

In JS, document.cookie provides access to all cookies (key-value pairs, each separated by a semi-colon).
Cookies are set by a web server ising set-cookie HTTP-header. Next when the same domain, receives a request the browser sends the cookie through a Https header. In this way browser will know who sent the request.

Way of storing the data.

document.cookie = "name=harry990";
when you write something in document.cookie, it adds this to the cookie list, not replace other cookies.
*/

console.log(document.cookie);
document.cookie = "name=harry990";
document.cookie = "name=sara990";  // this will update the name harry with sara
document.cookie = "name2=abiha990"; // this won't impact harry or sara cookie i.e. name
console.log(document.cookie);

// Encode URI component
let key = prompt ("enter your key");
let val= prompt ("enter your value");
// document.cookie=`${key}=${val}`; this won't work perfectly
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(val)}`;

// to decode we can use decodeURIComponent('string') 

/*
COOKIE OPTIONS
document.cookie= "name= abiha; age=19"; this won't work... 
means we can't set more than one cookies this way, as age will be ignored. Instead cookie have several options which can be provided after key value to set a call like this: 
document.cookie= "user=xyz; path=/a; expires=Thu, 01 Jan 1970 00:00:00 GMT"

if the cookie is set on /a the cookie will only be found on this page path.  


NOTE:
- name= value pair, after encodeURIComponent, should not exceed 4KB.
- Total no of cookies per domain is limited to around 20+ (exact no is browser dependent)

*/