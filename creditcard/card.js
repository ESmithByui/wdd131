function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function displayError(msg) {
	// display error message
	document.querySelector('.error_msg').innerHTML = msg
}
function submitHandler(event) {
	event.preventDefault()
	let errorMsg = ''
	console.log(this.card_number.value)
	// clear any previous errors
	displayError('')
	// check credit card number
	if (isNaN(this.card_number.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.card_number.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n'
	}

    //check date
    const currentDate = new Date()
    if ('20' + this.year.value <= currentDate.getFullYear()) {
        if ('20' + this.year.value < currentDate.getFullYear()) {
            errorMsg += 'Card is expired\n'
        } else if (this.month.value < currentDate.getMonth() + 1) {
            errorMsg += 'Card is expired\n'
        }
    }
    if (this.month.value > 12) {
        errorMsg += 'Month is invalid\n'
    }


	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg)
		return false
	}
	return true
}

document.querySelector('#card').addEventListener('submit', submitHandler)