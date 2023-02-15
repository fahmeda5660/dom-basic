console.log("Hello from append JS");
// Child add
//#1 where to add
const addChild = document.getElementById('style-id');
// #2 what to add
const pNew = document.createElement('p');
pNew.innerText = 'Newly added paragragh';
// #3  add the child
addChild.appendChild(pNew);
// Full section add
//#1 where to add
const mainConatainer = document.getElementById('main-content'); 
// #2 what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText ='Lorem ipsum dolor sit amet.'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='Lorem ipsum dolor sit amet.'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='Lorem ipsum dolor sit amet.'
ul.appendChild(li3);

section.appendChild(ul);
mainConatainer.appendChild(section);
// Set inner HTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Genji</li>
</ul>
`


mainConatainer.appendChild(sectionDress);