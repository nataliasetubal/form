class FormClass {
  constructor() {
    this.usernameValid = false;
    this.emailValid = false;
    this.cpfValid = false;
    this.cellphoneValid = false;
  }

  setUsernameValid() {
    this.usernameValid = true
    this.allRequiredCampsFilled()
  }

  setUsernameInvalid() {
    this.usernameValid = false
    this.allRequiredCampsFilled()
  }

  setEmailValid() {
    this.emailValid = true
    this.allRequiredCampsFilled()
  }

  setEmailInvalid() {
    this.emailValid = false
    this.allRequiredCampsFilled()
  }

  setCpfValid() {
    this.cpfValid = true
    this.allRequiredCampsFilled()
  }

  setCpfnameInvalid() {
    this.cpfValid = false
    this.allRequiredCampsFilled()
  }

  setCellphoneValid() {
    this.cellphoneValid = true
    this.allRequiredCampsFilled()
  }

  setCellphoneInvalid() {
    this.cellphoneValid = false
    this.allRequiredCampsFilled()
  }

  allRequiredCampsFilled() {
    const valid = (this.usernameValid &&
      this.emailValid &&
      this.cpfValid &&
      this.cellphoneValid)

    this.toogleSubmitButton(valid)
  }

  toogleSubmitButton(valid) {
    const button = document.getElementById('button')
    return button.disabled = !valid
  }
}

var formClass = new FormClass

function validateUserName(event) {
  const value = getInputValue(event).toString()

  if (value.length >= 3) {
    formClass.setUsernameValid()
    return removeError(event)
  }

  formClass.setUsernameInvalid()
  const message = 'Por favor inserir o nome completo.'
  addError(message, event)
}

function validateEmail(event) {
  const value = getInputValue(event)
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if (emailValidation.test(value)) {
    formClass.setEmailValid()
    return removeError(event)
  }
  formClass.setEmailInvalid()
  const message = "O e-mail está inválido."
  addError(message, event)
}

function validateCpf(event) {
  const value = getInputValue(event)
  const cpfValidation = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

  if (cpfValidation.test(value)) {
    formClass.setCpfValid()
    return removeError(event)
  }
  formClass.setCpfnameInvalid()
  const message = "Insira um CPF válido."
  addError(message, event)
}

function validateCellphone(event) {
  const value = getInputValue(event)
  const cellphoneWithTheTraitsValidation = /^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$/
  const cellphoneValidation = /^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$/

  if (cellphoneWithTheTraitsValidation.test(value) || cellphoneValidation.test(value)) {
    formClass.setCellphoneValid()
    return removeError(event)
  }
  formClass.setCellphoneInvalid()
  const message = "Insira um número de telefone válido."
  addError(message, event)
}

function getInputValue(event) {
  const value = event.target.value
  return value
}

function addErrorMessage(message, event) {
  const errorMessageFieldID = event.srcElement.id
  const errorMessageField = document.getElementById(errorMessageFieldID).nextElementSibling
  errorMessageField.innerText = message
}

function addError(message, event) {
  addErrorMessage(message, event)
  addErrorStyle(event)
}

function removeError(event) {
  removeErrorMessage(event)
  removeErrorStyle(event)
}

function removeErrorMessage(event) {
  const errorMessageFieldID = event.srcElement.id
  const errorMessageField = document.getElementById(errorMessageFieldID).nextElementSibling
  errorMessageField.innerText = ""
}

function addErrorStyle(event) {
  const inputID = event.srcElement.id
  document.getElementById(inputID).classList.add('input-error')
}

function removeErrorStyle(event) {
  const inputID = event.srcElement.id
  document.getElementById(inputID).classList.remove('input-error')
}