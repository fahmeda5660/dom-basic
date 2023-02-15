// console.log("Hello from JS");
// console.log(document);
// console.log(document.body);
//#1 getElementsByTagName---------------------------
const h3Collection = document.getElementsByTagName('h3');
// console.log(h3Collection);
for(const h3 of h3Collection){
    // console.log(h3);  
    //  console.log(h3.innerText)                  
}
const liCollection = document.getElementsByTagName('li');
// console.log(h3Collection);
for(const li of liCollection){
    // console.log(li);  
    //  console.log(li.innerText)                  
}
//#2 getElementsById---------------------------
const fruitTitle = document.getElementById('fruit-title');
// console.log(fruitTitle.innerText);
fruitTitle.innerText = 'Fruit changed by JS';
// console.log(fruitTitle.innerText);
//#3 getElementsByClassName---------------------------
const domes = document.getElementsByClassName('dom');
for(const dom of domes){
    // console.log(dom.innerText);
}
//#4 querySelectorAll---------------------------

const sinleLis = document.querySelector('.fruit-container li');
// for(const singleLi of sinleLis){
//     console.log(singleLi.innerText)
// }
// console.log(sinleLis.innerText);
//#5 querySelectorAll---------------------------

const multipleLis = document.querySelectorAll('.fruit-container1 li');
for(const multipleLi of multipleLis){
    // console.log(multipleLi.innerText);
}
// style adding
const styleAdd = document.getElementById('style-add').style.backgroundColor='red';
// console.log(styleAdd);
// getAttribute
const title = document.getElementById('style-add');
// console.log(title.getAttribute('class'));
// console.log(title.classList);
title.classList.add('purple-bg');
// console.log(title.classList);
//setAttribute
title.setAttribute('title', 'Hi I am a title');
// 
const title1 = document.getElementsByClassName('style-div')[0].innerText;
// console.log(title1);



 