<<<<<<< HEAD






=======
// console.log(fieldsets)
const question= "http://127.0.0.1:3000/questions"
fetch(question)
  .then((response)=>
    response.json()
    )
    .then((data)=>console.log(data))
>>>>>>> 2dc1fbd72cfe31ebc64b1bfc872cf9d4da0702f2


signupForm = document.getElementById('signup-form')
console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
    const username = document.getElementById('username').innerText
    console.log(username)
    e.preventDefault()
    alert('signup complete!')
    
    e.target.reset()
})
// const fieldsets = document.querySelectorAll(".fieldset")
// const progressBar = document.querySelector('#progress-bar')
// function progressBarFill(fieldset) {
//     for fieldset in fieldsets {
//         let width = 0
//         if fieldset radio checked{
//             width++
//             progressBar.style.width = width + '%'
//         }
//     }
// }


