const welcomeMessage=document.getElementById('welcomeMessage')
// console.log(fieldsets)
const questionDataBase= "http://localhost:3000/questions"
//iterate by changing question id number and using that in a for Each
let questionId=0
fetch(questionDataBase)
.then((response)=>
response.json()
)
.then((data)=>{
  console.log(data)
  data.forEach(dbQuestion => {
        questionId++
        const testQuestion="question"+questionId
        const questionsHTML=document.getElementById(`${testQuestion}`)
        questionsHTML.querySelector('legend').innerText=dbQuestion.question1
        const questionAnswers1=document.getElementById(`q${questionId}A1`)
        questionAnswers1.innerText=dbQuestion.correctAnswer
        const questionAnswers2=document.getElementById(`q${questionId}A2`)
        questionAnswers2.innerText=dbQuestion.wrongAnswer1
        const questionAnswers3=document.getElementById(`q${questionId}A3`)
        questionAnswers3.innerText=dbQuestion.wrongAnswer2
        const questionAnswers4=document.getElementById(`q${questionId}A4`)
        questionAnswers4.innerText=dbQuestion.wrongAnswer3
        console.log(questionAnswers1)
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
    welcomeMessage.innerText=`Welcome, ${username}!`
    e.target.reset()
})
const triviaSubmit = document.getElementById('trivia-submit')
triviaSubmit.addEventListener('click', e => {
  alert('this worked')
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


