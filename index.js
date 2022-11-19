function validateUserName(event) {
  const value = getInputValue(event)

  if (value.lenght >= 3) {
    removeErrorMessage(event)
  }
  const message = "Favor inserir o nome completo."
  addErrorMessage(message, event)
}

function validateEmail(event) {
  const value = getInputValue(event)
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (emailValidation.test(value)) {
    removeErrorMessage(event)
  }

  const message = "O e-mail está inválido."
  addErrorMessage(message, event)
}

function validateCpf(event) {
  const value = getInputValue(event)
  const cpfValidation = ''

  if (cpfValidation.test(value)) {
    removeErrorMessage(event)
  }

  const message = "Favor inserir o nome completo."
  addErrorMessage(message, event)
}

function validateCellphone(event) {
  const value = getInputValue(event)
  const cellphoneValidation = ''

  if (cellphoneValidation.test(value)) {
    removeErrorMessage(event)
  }

  const message = "Favor inserir o nome completo."
  addErrorMessage(message, event)
}

function getInputValue(event) {
  const value = event.target.value
  return value
}

function addErrorMessage(message, event) {
  const inputField = event.srcElement
  const errorMessageField = inputField.nextElementSibling
  errorMessageField.innerText = message
  inputField.classList.add('input-error')
}

function removeErrorMessage(event) {
  const inputField = event.srcElement
  const errorMessageField = inputField.nextElementSibling
  errorMessageField.textContent = ''
  inputField.classList.remove('input-error')
}