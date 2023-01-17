const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstName'];
    const lastName = form['lastName'];
    const eMail = form['eMail'];
    const passWord = form['passWord'];

    addError(firstName);
    addError(lastName);
    if (!validateEmail(eMail)) {
        addError(eMail);
    };
    addError(passWord);
})

function addError(field) {

    const value = field.value;
    const parentBox = field.parentNode;

    if (value === '') {
        parentBox.classList.add('error')
    } else {
        parentBox.classList.remove('error')
    }
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };