







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


// console.log(fieldsets)
const question= "http://127.0.0.1:3000/questions"
fetch(question)
  .then((response)=>
    response.json()
    )
    .then((data)=>console.log(data))
