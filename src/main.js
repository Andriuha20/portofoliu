import './style.css'

const an = document.getElementById('an')
if (an) {
  an.textContent = String(new Date().getFullYear())
}
