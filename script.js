function calculateAge() {
    const dobInput = document.getElementById('dob');
    const result = document.getElementById('result');


    if (!dobInput.value) {
        result.innerText = 'Please enter a valid date of birth';
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();

    const age = today.getFullYear() - dob.getFullYear();

    if(today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age --;
    }
    result.innerText = `You are ${age} years old.`;
}