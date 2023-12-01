const greetings = "Hello World"
    console.log(greetings)

 //Year
const yr = new Date()
const year = yr.getFullYear()
  document.getElementById("year").outerHTML = year

 //Button Alert
const notify = document.querySelector("#alert")
 const me =("You are now Subscribed!")
 notify.addEventListener("click", () =>{
alert(me)
 })

 //Button Hover
const hover = document.querySelector("#alert")
 hover.addEventListener("mouseover", () =>{
  hover.style.backgroundColor ="red"
 if(hover.addEventListener("mouseout", () =>{
    hover.style.backgroundColor = ""
   })){
 }})

// Button Hover changes text
 const subscribe = document.getElementById("alert")
 subscribe.onmouseover = () =>{
    subscribe.innerText = "Subscribed"

subscribe.onmouseleave = () =>{
    subscribe.innerText = "Subscribe"
}}

//Increment Button
let number = 0 
let count = document.getElementById("counter")
let incrementor = document.getElementById("clicker")
 incrementor.addEventListener("click", () =>{
  number++
  count.textContent = number.toString()
    if(number %2 == 0 ){
    counter.classList.add("even")
    counter.classList.remove("odd")
   }
   else{
    counter.classList.add("odd")
    counter.classList.remove("even")
   }
 })

 const numberlist = document.getElementById("numbers")
for(let i =1; i<=100; i++ ){
    const listitems = document.createElement("li")
    const even = i % 2 == 0
    listitems.innerHTML = even ? "Even" :"Odd"
    numberlist.appendChild(listitems)

    if(even) listitems.classList.add("Even")
     else listitems.classList.add("Odd")
}


