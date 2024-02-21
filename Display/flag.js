// 2) Display all the country flag in the console.

let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true);
request1.send();
request1.onload=function (){
  let data = request1.response;
  let result = JSON.parse(data);
  console.log(result);
  for(let  i=0; i<result.length; i++)
  {
      console.log(result[i].flags.png);
  }
}