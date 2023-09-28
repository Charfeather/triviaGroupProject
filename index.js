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
        let questionAnswers1=document.getElementById(`q${questionId}A1`)
        questionAnswers1.innerText=dbQuestion.correctAnswer
        const questionAnswers2=document.getElementById(`q${questionId}A2`)
        questionAnswers2.innerText=dbQuestion.wrongAnswer1
        const questionAnswers3=document.getElementById(`q${questionId}A3`)
        questionAnswers3.innerText=dbQuestion.wrongAnswer2
        const questionAnswers4=document.getElementById(`q${questionId}A4`)
        questionAnswers4.innerText=dbQuestion.wrongAnswer3
        console.log(questionAnswers1)
        const hint = document.getElementById(`q${dbQuestion.id}Hint-hidden`)
        hint.innerText = dbQuestion.hint1
      });
    })
signupForm = document.getElementById('signup-form')
// console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    // console.log(username)
    // console.log(document.getElementById(email))
    // console.log(document.getElementById(password))
    welcomeMessage.innerText=`Welcome, ${username}!`
    e.target.reset()
})
// const correctAnswers = document.querySelectorAll('')
const triviaSubmit = document.getElementById('trivia-submit-btn')
triviaSubmit.addEventListener('click', e => {
  e.preventDefault()
  confetti({
    particleCount: 600,
    spread: 90,
    origin: { y: 0.6 },
  });
  function resetForm(){
    input = document.getElementById('trivia-form')
    input.reset()
  }
  resetForm()
  function resetProgress(){
    progressBar.value = 0
  }
  resetProgress()
  // alert('this worked')
  function snackbarAnswersCorrect() {
    const snackbar = document.getElementById('snackbar')
    snackbar.className = "show"
    snackbar.innerText = "Thanks for playing!"
    setTimeout(function(){ 
      snackbar.className = snackbar.className.replace("show", "") }, 3000)
  }
  snackbarAnswersCorrect()    
})
// triviaSubmit.addEventListener('submit', e => {
//   e.preventDefault()
//   const input = document.querySelectorAll('input')
//   console.log(input)
//   input.reset()
//   console.log(e)
//   console.log(e.target)
//   // alert('this worked')
// })

//HINT HOVER
const hintDivs = document.querySelectorAll('.hint')
const hiddenDivs = document.querySelectorAll('.hidden')
hintDivs.forEach((hintDiv) => {
  hintDiv.addEventListener('mouseover', (e) => {
    hiddenDivs.forEach((hiddenDiv) => {
      const matchingHintDiv = hintDiv.id
      const matchingHiddenDiv = hiddenDiv.id.replace("-hidden", "")
      if (matchingHintDiv === matchingHiddenDiv) {
        hiddenDiv.style.display = "block"
      }
    })
  })
  hintDiv.addEventListener('mouseleave', (e) => {
    hiddenDivs.forEach((hiddenDiv) => {
      hiddenDiv.style.display = "none"
    })
  })
})

//PROGRESS BAR
const progressBar = document.getElementById('progress-bar')
// console.log(progressBar)
const radioGroups = document.querySelectorAll('.radio-group')
let clickedGroupCount = 0;
// console.log(radioGroups)
radioGroups.forEach((radioGroup) => {
  // console.log(radioGroups)
  // console.log(radioGroup)
  const radioInputs = radioGroup.querySelectorAll('input[type="radio"]')
  // console.log(radioInputs)
  radioInputs.forEach((radioInput) => {
    radioInput.addEventListener('change', (e) => {
      if (clickedGroupCount < radioGroups.length){
        progressBar.value++
        clickedGroupCount++
        console.log(progressBar.value)
      }
    })
  })
})

// function updateProgressBar() {
//   let current = progressBar.value
//   console.log(current)
//   const min = 0
//   const max = progressBar.max
//   console.log(max)
//   // for btn in answerBtns {}
//   // answerBtns.addEventListener('click', (e) => {
//   //   console.log('hello!')
//   })

// }


// 
// 
// 

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


