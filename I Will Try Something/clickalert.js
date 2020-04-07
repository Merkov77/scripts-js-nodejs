const _alert = message => {
	const css = box => {
		box.style.position = "fixed"; box.style.margin = "auto"
		box.style.top = "50%"; box.style.left = "50%"
		box.style.transform = "translate(-50%, -50%)"
		box.setAttribute("align", "center")
		box.style.color = "#303030"

		box.animate([{
			padding:"0px",
			fontSize:"100%",
			background:"transparent",
			border:"none",	
			opacity:"0"
		},{
			padding:"30px",
			fontSize:"150%",
			background:"#f2f2f2",
			border:"0.5px solid #dbdbdb",
			opacity:"1"
		}],{duration:500, iterations:1})

		box.style.padding = "30px"
		box.style.fontSize = "150%"
		box.style.background = "#f2f2f2"
		box.style.border = "0.5px solid #dbdbdb"
		box.style.opacity = "1"
	}

	let divContainer = document.createElement("div")
	divContainer.style.top = "0"
	divContainer.style.bottom = "0"
	divContainer.style.left = "0"
	divContainer.style.right = "0"
	divContainer.style.position = "fixed"
	divContainer.style.margin = "auto"
	divContainer.style.background = "black"
	divContainer.style.opacity = "0.5"
	divContainer.style.zIndex = "1"

	let div = document.createElement("div")
	div.style.zIndex = "1"

	let divam = document.createElement("div")
	divam.classList.add("image")
	divam.innerHTML = ">_<"

	let br = document.createElement("br")

	div.appendChild(divam)
	div.appendChild(br)
	div.innerHTML += message
	css(div)

	let body = document.querySelector("body")
	body.appendChild(divContainer)
	body.appendChild(div)

	setTimeout(()=>{
		div.animate([{
			opacity:"1"
		},{
			opacity:"0"
		}],{duration:3000, iterations:1})
	}, 3000)

	setTimeout(()=>{
		div.remove()
		divContainer.remove()
	}, 6000)
}