

let form = document.getElementById('form');


const submitForm = (event) => {
    event.preventDefault();

    let fName = document.querySelector('[name="fname"]');
    let lName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${fName.value}, Nazwisko: ${lName.value}`);
}

form.addEventListener('submit', submitForm);