console.log( "Hello World!" );

const sumit1 = document.querySelector('.sumit1');
const ada = document.querySelector('.ada');
const all = document.querySelector('.all');

sumit1.addEventListener('click', ()=>{
  ada.classList.add('active');
});

sumit1.addEventListener('click', ()=>{
  all.classList.remove('remove');
});




ScrollReveal({
 reset: true,
 distance: '80px',
 duration: 1500,
 delay: 200
 });
 
 ScrollReveal().reveal('.form, .sms,  .bod, .end p, .header a', { origin: 'top'});