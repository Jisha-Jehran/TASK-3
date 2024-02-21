// 3) a) Display the all country names.

let request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload=function (){
  let data = request2.response;
  let result = JSON.parse(data);
  console.log(result);
  for(let  i = 0; i < result.length; i++)
  {
      console.log(result[i].name.common);
  }
}

// b) Display the all country region.


let request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload=function (){
  let data = request3.response;
  let result = JSON.parse(data);
  console.log(result);
  for(let  i = 0; i < result.length; i++)
  {
      console.log(result[i].region);
  }
}


// c) Display the all country subregion.



let request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
request4.send();
request4.onload=function (){
  let data = request4.response;
  let result = JSON.parse(data);
  console.log(result);
  for(let  i = 0; i < result.length; i++)
  {
      console.log(result[i].subregion);
  }
}

// d) Display the all country population.

let request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload=function (){
  let data = request5.response;
  let result = JSON.parse(data);
  console.log(result);
  for(let  i = 0; i < result.length; i++)
  {
      console.log(result[i].population);
  }
}
