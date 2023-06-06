/*=============== SHOW MENU ===============*/
const navManu = document.getElementById('nav-menu'), 
    navToggle = document.getElementById('nav-toggle'), 
    navClose = document.getElementById('nav-close');

/*=============== MENU SHOW ===============*/
/* Validate if constact Exists */

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navManu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constact Exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navManu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navManu.classList.remove('show-menu')   
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () => {
//     const header = document.getElementById('header')
//     // when the scroll is greater than 50 veiw point height, add the scroll-header class to the header tag.
//     this.scrollY >= 50 ? header.classList.add('scroll-header')
//                        : header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', 'scrollHeader')

/*=============== ADD BLUR TO HEADER ===============*/
function blurlHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add the blur-header class to the header tag.
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
  }
  
  window.addEventListener('scroll', blurlHeader);  

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ivag1ef','template_h64psla','#contact-form','zTJRkgrs_Lt9p-iVL')
        .then(() => {
            // show sent message
            contactMessage.textContent = 'Message sent Successfully! ✅'

            // Remove Message after 5 Seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            },5000)

            // Clear input fields
            contactForm.reset()

        }, () => {
            // Show Error Message
            contactMessage.textContent = 'Message not sent (service error)! ❎'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewpoint height, add the show scroll class to the a tag with scrollup
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58.
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__data, home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})