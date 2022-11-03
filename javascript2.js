const signUp = e => {
    let formData = {
        fname: document.getElementById('firstName').value,
        lastname: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    e.preventDefault();

}




