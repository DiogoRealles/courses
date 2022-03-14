export default function initOperation(){
	let btnAnswer = document.querySelector('#btnAnswer');
	let num1 = document.querySelector('#num1');
	let num2 = document.querySelector('#num2');
	let txtAnswer = document.querySelector('#txtAnswer');
	let result = 0;
	let messageSpan = document.querySelector('#messageSpan');
	let numRandom = () =>{
		return Math.floor(Math.random() * 11);
	}

	let generateCalc = (num1Param, num2Param) =>{
		num1Param.innerText = numRandom();
		num2Param.innerText = numRandom();
		result = +num1.innerText * +num2.innerText;
	}

	let answer = () =>{
		let scoreboardX = document.querySelector('#scoreboard-2');
		let scoreboardY = document.querySelector('#scoreboard-1');
		let answerUser = parseInt(txtAnswer.value);
		let message = result === answerUser ? 'Correta!' : 'Errada!';

		if(message === 'Correta!'){
			messageSpan.classList.add('answerCorrect');
			scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
		} else {
			messageSpan.classList.remove('answerCorrect');
			messageSpan.classList.add('answerWrong');
			scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
		}
		messageSpan.innerText = message;

		txtAnswer.value = '';
		txtAnswer.focus();
		generateCalc(num1, num2);
	}
	btnAnswer.addEventListener('click', answer);

	generateCalc(num1, num2);
}
