export default function(){
  function typeWriter(element){
  const arrayText = element.innerHTML.split('');
  element.innerHTML = '';

  arrayText.forEach(
    (letter, i) => {
    setTimeout(
      () => element.innerHTML += letter, 75 * i
    )
  })
}
const title = document.querySelector('.information-text');
typeWriter(title);

// console.log('%c                                    .::!!!!!!:.', 'color:purple; background-color:white;');
// console.log('%c.!!!!!:.                           .:!!!!!!!!!!', 'color:purple; background-color:white;');
// console.log('%c~~~~!!!!!!.                    .:!!!!!!!!UWWW$$$', 'color:purple; background-color:white;');
// console.log('%c    :$$NWX!!:             .:!!!!!!XUWW$$$$$$$$$P', 'color:purple; background-color:white;');
// console.log('%c    $$$$$##WX!:       .<!!!!UW$$$"   "$$$$$$$#', 'color:purple; background-color:white;');
// console.log('%c    $$$$$   $$$UX   :!!UW$$$$$$$$     $$$$$*', 'color:purple; background-color:white;');
// console.log('%c    ^$$$B   $$$$\\    $$$$$$$$$$$$    d$$R"', 'color:purple; background-color:white;');
// console.log('%c      "*$bd$$$$        \'*$$$$$$$$$$o+#', 'color:purple; background-color:white;');
// console.log('%c            """"             """"""', 'color:purple; background-color:white;');

}