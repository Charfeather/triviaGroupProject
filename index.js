const welcomeMessage=document.getElementById('welcomeMessage')
// console.log(fieldsets)
const question= "http://localhost:3000/questions"
//iterate by changing question id number and using that in a for Each
let questionId=0
const questions=document.getElementById(`${questionId}`)
fetch(question)
.then((response)=>
response.json()
)
.then((data)=>{
  console.log(data)
  data.forEach(id => {
        questionId++
        const testQuestion="question"+questionId
        console.log(testQuestion)
      });
    })

signupForm = document.getElementById('signup-form')
console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    console.log(username)
    console.log(document.getElementById(email))
    console.log(document.getElementById(password))
    alert('signup complete!')
    welcomeMessage.innerText=`Hello, ${username}!`
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


