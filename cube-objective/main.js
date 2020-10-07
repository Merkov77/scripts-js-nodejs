const conjunt_g = {}

		const root = document.getElementById("root")

		for (let x = 0; x < 9; x++){
			conjunt_g[x] = 0
			const div = document.createElement("div")
			if (x == 0 || x == 1 || x == 2 || x == 3 || x == 5 || x == 6 || x == 7){
				div.className = "min-size p-4 m-1 rounded flex-grow-1 alert-primary"
			}else if (x == 8){
				div.className = "min-size p-4 m-1 rounded flex-grow-1 alert-warning "
			} else {
				div.className = "min-size p-4 m-1 rounded flex-grow-1 alert-dark	"
			}
			div.classList.add(x+"-block", "position-relative", "margin-auto", "transition-ease-all")
			div.ondragstart = function(){
				return false;
			}
			root.appendChild(div)
		}

		let playeria = document.createElement("div")
		playeria.style.borderRadius = "100%"
		playeria.className = "p-4 transition-ease-all bg-primary cursor-pointer top left right bottom position-absolute margin-auto-p"
		playeria.ondragstart = function(){
			return false;
		}
		playeria.onpointerenter = function(){
			playeria.classList.add("border", "border-dark")
		}
		playeria.onpointerout = function(){
			playeria.classList.remove("border", "border-dark")
		}

		const block_one = document.getElementsByClassName("0-block")[0]
			block_one.appendChild(playeria)

		let if_start = false
		document.getElementById("start").onclick = function(){
			if (!if_start){
				if_start = true
				const block_one = document.getElementsByClassName("0-block")[0]
				block_one.appendChild(playeria)
				const Neurona = new brain.NeuralNetwork()

				const training = [
					{	
						input: {
							0:0.2,1:0,2:0,
							3:0,4:0,5:0,
							6:0,7:0,8:0
						}, 
						output:{1:1}
					},{	
						input: {
							0:0,1:0.4,2:0,
							3:0,4:0,5:0,
							6:0,7:0,8:0
						}, 
						output:{2:1}
					},{	
						input: {
							0:0,1:0,2:0.6,
							3:0,4:0,5:0,
							6:0,7:0,8:0
						}, 
						output:{5:1}
					},{	
						input: {
							0:0,1:0,2:0,
							3:0,4:0,5:0.8,
							6:0,7:0,8:0
						}, 
						output:{8:1}
					},{	
						input: {
							0:0.2,1:0,2:0,
							3:0,4:0,5:0,
							6:0,7:0,8:0
						}, 
						output:{3:1}
					},{	
						input: {
							0:0,1:0,2:0,
							3:0.4,4:0,5:0,
							6:0,7:0,8:0
						}, 
						output:{6:1}
					},{	
						input: {
							0:0,1:0,2:0,
							3:0,4:0,5:0,
							6:0.6,7:0,8:0
						}, 
						output:{7:1}
					},{	
						input: {
							0:0,1:0,2:0,
							3:0,4:0,5:0,
							6:0,7:0.8,8:0
						}, 
						output:{8:1}
					}
				]


				let once = false

				let retro;
				let interval = setInterval(function(){
					let input_new = {}
					if (!once){ //Start
						for (let x = 0; x < 9; x++){	
							if (x === 0){
								input_new[x] = 1
							} else {
								input_new[x] = 0
							}
						}
						once = true
					}
					
					//retroalimentacion
					if (retro !== undefined){
						input_new[retro] = 1
						console.log(input_new, retro)
					}

					Neurona.train(training)
					const result = brain.likely(input_new, Neurona)
					
					retro = result

					if (result != "null"){
						if (root.children[result] !== null && root.children[result] !== undefined){
							root.children[result].appendChild(playeria)
							root.children[result].animate([{
								transform:"scale(0.8)"
							},{
								transform:"scale(1)"
							}],{duration:100, iterations:1})

						}
					}

					//Meta
					if (root.children[8].children.length == 1){
						if_start = false
						clearInterval(interval)
					}

					console.log("result:",	result)
				},500)
			}
		}
