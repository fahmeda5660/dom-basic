console.log("Hello from Style JS");
// style Adding
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}
// Class Add And Remove
const addStyleClass = document.getElementById('style-id');
addStyleClass.classList.add('large-text');
addStyleClass.classList.add('text-center');
addStyleClass.classList.remove('large-text');

