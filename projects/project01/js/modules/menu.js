export default function(){
  window.addEventListener('scroll', (event) => {
    event.preventDefault();
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  })
  
  let iconBars = document.querySelector('#iconBars');
  let iconTimes = document.querySelector('#iconTimes');
  let nav = document.querySelector('.nav');
  let navItems = document.querySelectorAll('.nav .nav__link');
  
  iconBars.addEventListener('click', activeNav);
  iconTimes.addEventListener('click', activeNav);
  function activeNav(){
    nav.classList.toggle('active');
  }
  
  navItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
    function closeMenu(){
      nav.classList.toggle('active');
    }
  });
  
  console.log('Hello');
}