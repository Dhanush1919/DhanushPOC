// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log('DHanuhs')
console.log('DHanuhs')
let a='Dhanush1919_HOwareyou';
console.log(a.length);
let b='Venkataraman';
let cz='Indian Cricket Team Captain'
//Concat
let c=a.concat(b);
console.log(c)
//Endswidth
let d=a.endsWith('1919');
console.log(d);
//includes()
let e=a.includes('Dhanush');
console.log(e);
//indexof()
let f=a.indexOf('HOw');
console.log(f);
//lastINdexof()
let g=a.lastIndexOf('1919');
console.log(g);
//repeat()
console.log(b.repeat(2));
//replace()
let h=b.replace("Venkataraman","1919");
console.log(h);
//Search()
let i=cz.search("Cricket");
console.log(i);
//Slice
let j=cz.slice(0,5);
console.log(j);
//Split
let k=cz.split(" ");
console.log(k);
//startswith()
let l=cz.startsWith("Indian");
console.log(l);
let lm=cz.startsWith("Cricket");
console.log(l);
//substr()
let m=cz.substr(1,4);
console.log(m);
//substring
let n=cz.substring(1,4);
console.log(n);
let a1="sdasda"
console.log(a1.substr(1,4))
console.log(a1.substring(1,4))
//toLowerCase
let o=cz.toLowerCase(cz);
console.log(o);
//toUpperCase
let p=cz.toUpperCase(cz);
console.log(p);
//trim
let str="    Hello   ";
let str1=str.trim();
console.log(str1);

//Number Methods:

//toFixed(x)
var num=9.679489
var nu=num.toFixed(2);
console.log(nu);
//toExponential(x)
var num=9.679849
var nu=num.toExponential();
console.log(nu);
//toString()
var num=9.679849
var nu=num.toString();
console.log(nu);

//Global Methods:

//console
console.table(["KTM", "Bajaj", "Yamaha"]);
console.warn("Warning!");
console.info("Good evening");
console.log("Good Night");
console.error("Mistake.!!");
//alert
//alert("I am an alert box!");
//prompt
//var person = prompt("Please enter your name", "Harry Potter");
//confirm
//confirm("Press a button!");
//Number()
var x1= true;
var x2="746";
var x3="183"
var nu=Number(x1) +"<br>"+ Number(x2)+Number(x3);
console.log(nu);
//isNaN()
 console.log(isNaN(123));
 console.log(isNaN('Hello'));
 console.log(isNaN(undefined));
//parseFloat()
var x1 = parseFloat("10.00");
var x2 = parseFloat("10.33");
console.log(x1);
console.log(x2);
//parseInt() 
var x1 = parseInt("10.00")
var x2 = parseInt("10.33")
console.log(x1);
console.log(x2);
//String()
var x1 = Boolean(0);
var x2 = Boolean(1);
var res =String(x1) + "<br>" +
String(x2)
console.log(res);
//Boolean()
var x1=Boolean(10>9)
console.log(x1); 