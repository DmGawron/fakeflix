
const emailInput = document.querySelector('.input-email')
const accordionContainer = document.querySelectorAll('.accordion-container')
const emailBtn = document.querySelector('.start-btn')
// console.log(accordionContent);
// const accordionContent = document.querySelectorAll('.accordion-content')
const iconContainer = document.querySelector('.icon-container')
const sectionFiveAccordion = document.querySelector('.section-five-accordion')
// sectionFiveAccordion.forEach(el => {
//   console.log(el);
//   el.addEventListener('click', (e) => {
//     e.target.nextElementSibling.classList.toggle('active')
//     console.log(e.target);
//         console.log(e.target.closest('li'))
//       })
// })


const validateEmail = (email) => {

  const errorInfo = document.querySelector('.email-error-info')
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if(re.test(email.value)) {
     email.classList.add('input-succes')
     errorInfo.innerHTML = ''
  } else {
    console.log(email);
    email.classList.add('input-error')
    errorInfo.classList.add('wrong-email')
    errorInfo.innerHTML = `<span> <i class="fa-solid fa-xmark"></i>Adres e-mail jest wymagany </span>`
  }
};


// Adres e-mail jest wymagany


sectionFiveAccordion.addEventListener('click', (e) => {
  accordionContainer.forEach(el => {
   const content = el.querySelector('.accordion-content')
   if( e.target.closest('.accordion-container') == content.parentElement ) {
    content.classList.toggle('active')
  } else {
    content.classList.remove('active')
  }
   
  }) 
  })

  emailBtn.addEventListener('click', () => {
    validateEmail(emailInput)
  })
    