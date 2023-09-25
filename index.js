const welcomeMessage=document.getElementById('welcomeMessage')
// console.log(fieldsets)
const question= "http://127.0.0.1:3000/questions"
fetch(question)
  .then((response)=>
    response.json()
    )
    .then((data)=>console.log(data))


signupForm = document.getElementById('signup-form')
console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    console.log(username)
    console.log(document.getElementById(email))
    console.log(document.getElementById(password))
    alert('signup complete!')
    welcomeMessage.innerText=`Hello ${username}!`
    e.target.reset()
})
// const fieldsets = document.querySelectorAll(".fieldset")
// const progressBar = document.querySelector('#progress-bar')
// function progressBarFill(fieldset) {
//     for fieldset in fieldsets {
//         let width = 0
//         if fieldset radio checked{
//             width++
//             progressBar.style.width = width + '%'s
//         }
//     }
// }


