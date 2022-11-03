
let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let fname = document.getElementById('firstName');
    let lname = document.getElementById('lastName');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    fname.value = '';
    lname.value = '';
    email.value = '';
    message.value = '';
})

sendButton.addEventListener('click', function(e){
    let fname = document.getElementById('firstName');
    let lname = document.getElementById('lastName');
    let email = document.getElementById('email');
    let message = document.getElementById('message')


    fname = fname.value;
    localStorage.setItem('fname', fname);

    lname = lname.value;
    localStorage.setItem('lname', lname);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
    
})