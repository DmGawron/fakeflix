
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');
const loginBtn  = document.querySelector('.btn-login');
const findoutSpan = document.querySelector('.find-out-more');

let errorForLogin = false;

//  let a =  passwordError.classList.add('active')
//  let b =  emailError.classList.add('active')

const validateLoginEmail = (email) => {
    const emailError = document.querySelector('#email-wrong');
    
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    const phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    console.log(email.value);
    console.log(email.value.match(phone));

    if(re.test(email.value) || email.value.match(phone)) {
        emailError.innerHTML = ''
        errorForLogin = false;
        email.classList.remove('error-input')
    } else {
        emailError.textContent = 'Wprowadź prawidłowy adres e-mail lub numer telefonu.'
        errorForLogin = true
        email.classList.add('error-input')
        //   errorInfo.innerHTML = `<span> <i class="fa-solid fa-xmark"></i>Adres e-mail jest wymagany </span>`
    }
};

const validatePassword = (password) => {
    const passwordError = document.querySelector('#password-wrong')
    if(password.value.length < 4 || password.value.length > 60 ) { 
    passwordError.textContent = 'Hasło musi mieć długość od 4 do 60 znaków.' 
    errorForLogin = true;
    password.classList.add('error-input')
} else {
    passwordError.textContent = ''
    errorForLogin = false;
    password.classList.remove('error-input')
    }
}

const showLoginError =  () => {
    const error = document.querySelector('.error-text')

    if(errorForLogin === true) {
        error.classList.add('active')       
        error.innerHTML = 'Niestety, nie możemy znaleźć konta z tym adresem e-mail. Spróbuj ponownie lub <span class="create-account-span-error"> utwórz nowe konto. </span>'
    } else {
        error.innerHTML = ''
        error.classList.remove('active') 
    }
}


  loginBtn.addEventListener('click', (e) => {
      e.preventDefault()
    
      validatePassword(passwordInput)
      validateLoginEmail(emailInput)
      showLoginError()
  })

  findoutSpan.addEventListener('click', () => {
    // document.querySelector('.find-out-more').style.visibility = 'hidden'
    document.querySelector('.find-out-more').classList.add('active')
    document.querySelector('.captcha-info').classList.add('info-active')
  })

  
  passwordInput.addEventListener('click', (e) => {
      document.querySelector('.pass-btn').classList.add('active')
      passwordInput.classList.add('btn-login-active')
 })


//  document.addEventListener('click', (e) => {

//     if(e.target != emailInput ) {
//         validateLoginEmail(emailInput)
//     }

//     if(e.target != passwordInput) {
//         document.querySelector('.pass-btn').classList.remove('active')
//         passwordInput.classList.remove('btn-login-active')
//         validatePassword(passwordInput)
//  }})