const footerYear = document.querySelector('#footerYear');
const date = new Date();
const year = date.getFullYear();
footerYear.innerHTML = year;

function doSomething(input) {
  return input;
}
