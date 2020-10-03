const parts = {
  errorText: 'the error message',
  errorIcon: 'the error icon',
  requiredIndicator: 'the requied asterisks',
  helperText: 'the helper text',
}

function baseStyleErrorText() {
  return {
    color: 'formError',
    fontSize: 'sm',
  }
}

const baseStyle = () => ({
  errorText: baseStyleErrorText(),
})

const Form = {
  parts,
  baseStyle,
}

export default Form;
