// TODO: Validate this form
// 1. Select all the fields and the checkbox
const textInputs = document.querySelectorAll('.form-control')
// console.log(textInputs)
const checkboxInput = document.querySelector('#tos')
// console.log(checkboxInput);
// 2. check if they have content on them

// 3.  check if the Checkbox is checked

// 4. Enable the button if everything is correct
const submitButton = document.querySelector('button');
// console.log(submitButton)

const checkboxChecked = (input) => {
  return input.checked
}

const allInputAreFilled = (textInputs) => {
  return Array.from(textInputs).every((input) => {
    return input.classList.contains('is-valid');
  })
}

console.log(allInputAreFilled(textInputs))

const enableButton = () => {
  // 1. check if it checked
  const isCheckboxChecked = checkboxChecked(checkboxInput)
  // 2. check if all the inputs are valid
  const allInputsAreValid = allInputAreFilled(textInputs)

  // 3. Enable the button OR NOT
  if (isCheckboxChecked && allInputsAreValid) {
    submitButton.disabled = false
    submitButton.textContent = 'Submit'
  } else {
    submitButton.disabled = true
    submitButton.innerText = 'Please fill all inputs'
  }
}

// validate ALL INPUTS!
textInputs.forEach((input) => {
  // we do stuff with EACH element
  input.addEventListener('blur', (event) => {
    // 2. get the content from the input
    const text = input.value
    if (text === '') {
      // 2.1 add in-valid class
      input.classList.remove('is-valid')
      input.classList.add('is-invalid')
    } else {
      input.classList.remove('is-invalid')
      input.classList.add('is-valid')
    }
    // 2.1 add validation classes
    // enableButton
    enableButton()
  })
})

// console.log(Array.from(textInputs))

checkboxInput.addEventListener('click', (event) => {
  enableButton()
})
