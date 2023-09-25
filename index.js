const question= "http://127.0.0.1:3000/questions"
fetch(question)
  .then((response)=>
    response.json()
    )
    .then((data)=>console.log(data))