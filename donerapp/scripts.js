function nextStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep + 1}`).classList.add('active');
}

function prevStep(currentStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${currentStep - 1}`).classList.add('active');
}

// Show or hide medication details based on selection
document.getElementById('medications').addEventListener('change', function() {
    let medicationDetails = document.getElementById('medication-details');
    if (this.value === 'yes') {
        medicationDetails.style.display = 'block';
    } else {
        medicationDetails.style.display = 'none';
    }
});
