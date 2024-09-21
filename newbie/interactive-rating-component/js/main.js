const form = document.querySelector('form');
const buttons = document.querySelectorAll('.select-rating');
const submit = document.querySelector('input');

let userRating;

form.onsubmit = () => false;

buttons.forEach(button => {

	button.onclick = () => {
		console.log('button is clicked')
		clearButtonsBackground()
		button.style.backgroundColor = 'hsl(217, 12%, 63%)';
		button.style.color = '#fff';
		userRating = button.dataset.userRating;
	}
})


function clearButtonsBackground() {
	buttons.forEach(button => {
		button.style.backgroundColor = 'hsl(210, 19%, 18%)';
		button.style.color = 'hsl(217, 12%, 63%)'
		console.log(userRating)
	})
}


submit.onclick = () => {
	let ratingState = document.querySelector('.rating-state');
	let thankYouState = document.querySelector('.thank-you-state');
	let rating = document.querySelector('.rating')
	rating.textContent = userRating;
	if (ratingState.style.display = 'block' && userRating > 0) {
		ratingState.style.display = 'none'
		thankYouState.style.display = 'block'
	} else {
		ratingState.style.display = 'block'
		thankYouState.style.display = 'none'
	}
}