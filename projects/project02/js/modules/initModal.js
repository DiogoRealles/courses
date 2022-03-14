export default function modal(){
	let btnOpenModal = document.querySelector('#btnOpenModal');
	let btnCloseModal = document.querySelector('#btnCloseModal');
	let modalOverlay = document.querySelector('.modal-overlay');

	btnOpenModal.addEventListener('click', openModal);
	function openModal(){
		modalOverlay.classList.add('active');
	}
	btnCloseModal.addEventListener('click', closeModal);
	function closeModal(){
		modalOverlay.classList.remove('active');
	}
}
