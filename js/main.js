AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// Form lines

// const nameInput = document.querySelector('.name-field').value 
// const mailInput = document.querySelector('.mail-field').value 
// const subjectInput = document.querySelector('.subject-field').value 
// const msgInput = document.querySelector('.msg-field').value 
// const mailBut = document.querySelector('.mail-butt')

// document.querySelector('mail-button').addEventListener('click', mailTo)

// function mailTo () {
  
//   mailBut.href = `mailto:gretacsotelo@gmail.com?subject=Hola&soy%${nameInput}%${subjectInput}body=${msgInput}`

// }
const animateGradient = (element) => {
  const colors = element.dataset.gradientColors.split(',');
  let index = 0;

  setInterval(() => {
    element.style.backgroundImage = `linear-gradient(to left, ${colors[index]}, ${colors[(index + 1) % colors.length]})`;
    index = (index + 1) % colors.length;
  }, 110);
};

document.querySelectorAll('#rainbow-text').forEach((element) => {
  animateGradient(element);
});