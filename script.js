const visit = document.querySelector('input[name="visit"]')

visit.onchange = function (e) {
  const address = document.querySelector('input[name="address"]')
  if (e.target.checked) {
    address.disabled = false
    address.parentElement.classList.remove('label_disabled')
    address.focus()
  } else {
    address.disabled = true
    address.parentElement.classList.add('label_disabled')
  }
  console.log(e.target.checked)
}
