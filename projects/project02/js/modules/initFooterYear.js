export default function initFooterYear(){
  let footerYear = document.querySelector('#footerYear');
  let date = new Date();
  let year = date.getFullYear();
  footerYear.innerHTML = year;
}