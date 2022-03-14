export default function form(){
  const signin = document.querySelector('[data-js="signin"]');
  signin.addEventListener('click', handleClick);

  function handleClick(e){
    e.preventDefault();
    fnToggle();
  }

  function fnToggle(){
    const formLogin = document.querySelector('[data-js="form-login"]');
    const feedback = document.querySelector('[data-js="feedback"]');
    
    formLogin.classList.toggle('hide');
    feedback.classList.toggle('hide');
  }
}