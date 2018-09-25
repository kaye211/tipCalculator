//Hide between form
const splitCheckBox = document.querySelector('#my-check .checkbox');
// const between = document.getElementById('btw');

splitCheckBox.addEventListener('change', function(e) {
	// If the checkbox is checked, display the output text
	console.log('working');
	// e.preventDefault();
	if (splitCheckBox.checked) {
		document.getElementById('btw').style.display = 'block';
	} else {
		document.getElementById('btw').style.display = 'none';
	}
});

// Set up listener for submit
document.getElementById('tip-form').addEventListener('submit', function(e) {
	//Hide results

	calculateTip();

	if (splitCheckBox.checked) {
		document.getElementById('results-no-split').style.display = 'none';
		document.getElementById('results-split').style.display = 'block';
	} else {
		document.getElementById('results-split').style.display = 'none';
		document.getElementById('results-no-split').style.display = 'block';
	}

	e.preventDefault();
});

// Calculate Tip
function calculateTip() {
	// UI variables
	const billAmount = document.getElementById('bill-amount');
	const percent = document.getElementById('tip-percent');
	var numberSplittingBill = document.getElementById('split-between').value;
	const totalTipAmount = document.getElementById('total-tip-amount');
	const individualTip = document.getElementById('individual-tip');
	const individualTotal = document.getElementById('individual-total');
	const noSplitTotal = document.getElementById('total-amount');

	// Check to see if splitting bill
	// Tip calculation
	const amount = parseFloat(billAmount.value);
	const percentValue = parseFloat(percent.value) / 100;
	const noSplitTip = amount * percentValue;
	var indTotal = amount / numberSplittingBill;

	// var total = billTotal / numberSplittingBill;

	// Validation

	if (isFinite(indTotal)) {
		individualTotal.value = indTotal + indTotal * percentValue;
		individualTip.value = (indTotal * percentValue).toFixed(2);
		// Show tip
		document.getElementById('results').style.display = 'block';

		//If not sharing  bill
	} else if (isFinite(noSplitTip)) {
		totalTipAmount.value = noSplitTip.toFixed(2);
		noSplitTotal.value = (amount + noSplitTip).toFixed(2);
		// Show tip
		document.getElementById('results').style.display = 'block';
	} else {
		errorMessage('Invalid Input');
	}
}

// Error Function
function errorMessage(error) {
	// Create a div
	const errorDiv = document.createElement('div');

	// Get elements to insert into DOM
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	// Add bootstrap alert class
	errorDiv.className = 'alert alert-danger';

	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Clear error after 3 seconds
	setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
	document.querySelector('.alert').remove();
}
