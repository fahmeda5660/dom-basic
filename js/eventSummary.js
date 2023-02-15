function handleOnClick(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by function attached onclick attribute'
}
function handleOnClickbg(){
    document.body.style.backgroundColor = 'red';
}
//option 2
document.getElementById('event-listener').addEventListener('click',function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handled by Event Listener';
})
// ----------------
document.getElementById('green').addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
})
// Input 
document.getElementById('btn-update').addEventListener('click', function(){
    // console.log('clicked')
    const inputField = document.getElementById('input-field');
    // console.log(inputField.value);
    const inputText = inputField.value;
    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value=' ';

})