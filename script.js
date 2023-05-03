// Header toggle

// let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

//Typing effect

let typed = new Typed('auto-input',{
    strings:['Front-End Developer!','Web Developer!'],
    typedpeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
})

// Active Link Status on Scroll

// // Get All Link 
// let navLinks = document.querySelectorAll('nav ul li a')
// // Get All Section
// let sections = document.querySelectorAll('section')
// console.log(sections)

// window.addEventListener('scroll', function (){
//     const scrollPos = this.window.scrollY
//     sections.forEach(section => {
//         if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
//                     link.classList.add('active')
//                 }
//             });
//         }
//     });
// });
