function calculateAge() {
    const dobInput = document.getElementById('dob');
    const result = document.getElementById('result');

    if (!dobInput.value || isNaN(new Date(dobInput.value))) {
        result.innerText = 'Please enter a valid date of birth';
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred this year yet
    if (
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
        result.innerText = `You are ${age - 1} years old.`; // Adjust age
    } 
    if (
        today.getFullYear() < dob.getFullYear()
    ) {
        result.innerText = `Please enter a valid date of birth`; // Adjust age
    }
     else {
        result.innerText = `You are ${age} years old.`;
    }
}
