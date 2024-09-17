console.log("hello ")
// let a=document.cookie="name:yash"
// document.cookie="name2:yash2;age:56",
// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; ";
document.cookie="name3:yash3"
// document.cookie="nsfa3:yash3",
// console.log(document.cookie)
// console.log(a)
document.cookie = "username=John Doe"
// alert(document.cookie)
let key=prompt("enter key");
let value=prompt("enter value");
console.log(`value at ${key} is ${localStorage.getItem(key)}`)
if(key=="red" || key=="blue"){
    localStorage.removeItem(key)
}
localStorage.setItem(key,value);
// localStorage.setItem("name","yash")
// localStorage.getItem()
