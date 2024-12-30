let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedString = JSON.parse(greeting);
let fromEl = document.getElementById("from");
fromEl.textContent = "From:" + parsedString.from;
let toEl = document.getElementById("to");
toEl.textContent = "To:" + parsedString.to;
let greetTextEl=document.getElementById("greetText");
greetTextEl.textContent=parsedString.greetText;