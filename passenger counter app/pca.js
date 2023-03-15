//function increment() {
//	console.log("The button was clicked")
	// body...
//}
//function increment(){
//	count = count + 1
//	document.getElementById('count-el').innerText = count
//}
//increment()
	let welcomeEl = document.getElementById("welcome-el")
	let name = "iowereth"
	let greeting = "welcome Sir, "
	let mygreeting = greeting + name
	welcomeEl.textContent = mygreeting
	

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
	count += 1
	countEl.textContent = count
}



function save(){
	let saved = count + " - "
	saveEl.textContent += saved
	countEl.textContent = 0
	count = 0
}

//let name = "Linda"
//let greeting = "Hi there"
//function perfGreet(){
	//console.log(greeting + ", " + name + "!")
//}
//perfGreet()
