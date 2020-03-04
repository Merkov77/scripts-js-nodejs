function generator(root){
	let child; let n = 40; let desordenado = [];  let obj ={};
	let count = 0; 

	for (let y = 0; y < n; y++){
		desordenado.push(y+1)
		desordenado.sort(()=>Math.random() - 0.5)
	}

	for (let x = 0; x < n; x++){
		child = document.createElement("div")	
		child.textContent = desordenado[x]

		child.classList.add("child") // Common Class
		child.className += " child"+x // Uniq Class

		child.style.order = x // Init Order
		
		root.appendChild(child)

		let cc = document.getElementsByClassName("child") //Select Childs
		let or = cc[x].style.order

		cc[x].addEventListener("click",()=>{
			count += 1; 
			or = cc[x].style.order

			obj[count % 2] = x

			if (or >= 0 && or <= n + 1){
				if (count % 2){ //First Selection / Click 
					cc[x].animate([
						{boxShadow: "0px 0px 20px #5550D1"
						},
						{boxShadow: "0px 0px 20px transparent"
						}],
						{duration:200,iterations:1})
					cc[x].style.color = "white"
					cc[x].style.background = "radial-gradient(circle, #873483, #712a6f, #5c205b, #471648, #340d36)"

				} else { //Second Selection / Click
					First = cc[obj[0]].style.order //First Click
					Second = cc[obj[1]].style.order //Second Click

					cc[obj[0]].style.order = Second
					cc[obj[0]].animate([
						{boxShadow:" 0px 0px 20px #5550D1",
						 transform:" scale(1) rotateY(0deg)"
						},
						{boxShadow:" 0px 0px 20px transparent",
						 transform:` scale(1.1) rotateY(220deg)`
						}],
						{duration:200,iterations:1})
					cc[obj[0]].style.color = "white"
					cc[obj[0]].style.background = "radial-gradient(circle, #20bea3, #1daf96, #1aa18a, #18927d, #158471, #137866, #116d5b, #0e6250, #0b5744, #074b38, #04412d, #023622)"

					cc[obj[1]].style.order = First
					cc[obj[1]].animate([
						{boxShadow:" 0px 0px 20px #5550D1",
						 transform:" scale(1) rotateY(220deg)"
						},
						{boxShadow:" 0px 0px 20px transparent",
						 transform:" scale(1.1) rotateY(0deg)"
						}],
						{duration:200,iterations:1})

					cc[obj[1]].style.color = "white"
					cc[obj[1]].style.background = "radial-gradient(circle, #873483, #712a6f, #5c205b, #471648, #340d36)"
				
					obj[0] = 0; obj[1] = 1
					count = 0
				}
			} 
		})

		cc[x].addEventListener("mouseover",()=>{
			cc[x].animate([
				{
					boxShadow:"inset 0px 0px 30px 0px #606060"
				},{
					boxShadow:"inset 0px 0px 0px 0px transparent"
				}
				],{
				duration:1000,iterations:1
			})
		})
	}
}

generator(document.getElementById("root"))
