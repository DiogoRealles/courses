export default function(){
  const dateNow = new Date()
  const year = dateNow.getFullYear();
  const footerYear = document.querySelector('[data-js="year"]');
  footerYear.innerText = year;
}