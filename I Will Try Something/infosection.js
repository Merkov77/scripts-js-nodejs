const infoSection = (event, _alert) => {
	let info = [
		"Hello friend, how are you?", 
		"Do you like Javascript? this is not a model for work. But the code is fantastic!"
	]

	info.map((e,i) => {
		let div = document.createElement("div")
		div.classList.add("element")
		div.className += " element" + (i + 1)

		div.innerHTML = e

		let section = document.getElementsByClassName("Section")[0]
		section.appendChild(div)
	})

	let sel = document.getElementsByClassName("element1")[0]
	let btn = document.createElement("button")
	btn.style.marginLeft = "20px"
	btn.style.padding = "10px"
	btn.style.width = "20%"

	let valBtn = document.createTextNode("I'm fine!")
	btn.appendChild(valBtn)

	btn.addEventListener(event, () => {
		_alert("That is great!")
	})

	sel.appendChild(btn)
}