
  function getData() {fetch ('https://jsonplaceholder.typicode.com/todos/1')
.then((response) =>  response.json())
.then((json)=> p.innerText =json.title)}

const sectionAdd = document.querySelector('section')
const div = document.createElement('div')
div.innerHTML = `<div class='todo-card'>
        <input type='checkbox'>

        <p></p>
      </div>`
sectionAdd.appendChild(div)
const p = document.querySelector('p')
getData()

fetch ('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
    .then((json) => {
        for (let i = 0; i < 20; i++) {                      
            console.log(json[i])}                 
        })




