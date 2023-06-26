const PHONE_PATTERN =/^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/

function telephoneCheck(str) {
  return PHONE_PATTERN.test(str)
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("27576227382"));