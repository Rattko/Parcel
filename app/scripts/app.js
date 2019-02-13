'use strict'

// FONT AWESOME

window.FontAwesomeConfig = {
	searchPseudoElements: true
}

// OUTDATED BROWSER MESSAGE

const closePopUp = document.getElementById('close-popup')
closePopUp.addEventListener('click', () => {
	closePopUp.parentElement.classList.add('fade-out')
	setTimeout(() => {
		closePopUp.parentElement.style.display = 'none'
	}, 200)
})
