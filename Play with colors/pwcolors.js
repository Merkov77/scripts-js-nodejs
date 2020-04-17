const genCol = (root, color, n) => {
	let container = document.createElement("div")
	container.classList.add("container")

	for (let x = 0; x < n; x++){
		const div = document.createElement("div")
		div.classList.add("square")

		if( color === "r" ){
			div.style.background = `rgb(${10*x},0,0)`
		} else if ( color === "g" ){
			div.style.background = `rgb(0,${10*x},0)`
		} else if ( color === "b" ){
			div.style.background = `rgb(0,0,${10*x})`
		} else if ( color === "random" ){
			div.style.background = `rgb(${x * Math.random() * 30},${x * Math.random() * 30},${x * Math.random() * 30})`
		}

		div.addEventListener("mousemove",()=>{
			const html = document.querySelector("html")
			html.style.background = div.style.background
		})

		div.addEventListener("mouseenter",()=>{
			div.animate([{
				boxShadow: "inset 0px 0px 20px " + div.style.background
			},{
				boxShadow: "inset 0px 0px 20px #000"
			}],{duration:300, iterations:1})
			div.style.boxShadow = "inset 0px 0px 20px #000"
		})

		div.addEventListener("mouseleave",()=> div.style.boxShadow = "none")
		container.appendChild(div)
	}
	root.appendChild(container)
}

const root = document.getElementById("root")

genCol(root, "r", 25)
genCol(root, "g", 25)
genCol(root, "b", 25)
genCol(root, "random", 30)
