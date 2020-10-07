const neurona = new brain.NeuralNetwork()
		let [clickone, clicktwo, clickthree] = [0,0,0]
		let array_clicks = [clickone,clicktwo,clickthree]

		neurona.train([
			{input:[1,0,0],output:{0:1}},
			{input:[0,1,0],output:{1:1}},
			{input:[0,0,1],output:{2:1}},
			{input:[0,0,2],output:{2:1}},
			{input:[0,2,0],output:{1:1}},
			{input:[2,0,0],output:{0:1}},
			{input:[1,2,3],output:{2:1}},
			{input:[1,2,0],output:{1:1}},
			{input:[2,0,0],output:{0:1}},
			{input:[1,0,2],output:{2:1}},
			{input:[0,2,1],output:{1:1}},
			{input:[2,0,1],output:{0:1}},
			{input:[1,3,9],output:{2:1}},
			{input:[5,0,4],output:{0:1}},
			{input:[5,8,4],output:{1:1}},
			{input:[5,10,15],output:{2:1}},
			{input:[15,4,8],output:{0:1}},
			{input:[18,15,10],output:{0:1}},
			{input:[1,4,1],output:{1:1}},
			{input:[2,1,1],output:{0:1}},
			{input:[1,1,3],output:{2:1}},
			{input:[0,0,0],output:{"e":1}},
			{input:[1,1,1],output:{"e":1}},
			{input:[0,1,1],output:{"e":1}},
			{input:[1,1,0],output:{"e":1}},
			{input:[1,0,1],output:{"e":1}},
		])

		let pressed = ""
		let buttons = ["btn1","btn2","btn3"]
		buttons = buttons.map(e => document.getElementById(e))
		buttons.map((e,i) => {
			e.onclick = event(i)
			e.onpointerdown = () => {
				if (i === 0){
					pressed = 1
					clickone += 1
					document.getElementsByClassName("counter")[i].innerHTML = clickone
				} else if (i === 1){
					pressed = 2
					clicktwo += 1
					document.getElementsByClassName("counter")[i].innerHTML = clicktwo
				} else if (i === 2){
					pressed = 3
					clickthree += 1
					document.getElementsByClassName("counter")[i].innerHTML = clickthree	
				}



				array_clicks = [clickone,clicktwo,clickthree]
				ia(neurona, e)
				console.log(array_clicks)
			}
		})

		function ia(neurona,btn){
			let result =  brain.likely(array_clicks,neurona);
			console.log(result)
			if (result != "e"){
				document.getElementById("facilitador_de_area").style.display = ""
				document.getElementById("facilitador_de_area").innerHTML = document.getElementsByClassName("btn")[result].textContent
				document.getElementById("facilitador_de_area").onclick = document.getElementsByClassName("btn")[result].onclick
			}
		}

		function javascript(){
			// alert("javascript")
		}

		function python(){
			// alert("python")
		}

		function react(){
			// alert("react")
		}

		function event(i){
			if (i === 0){
				return javascript
			} else if (i === 1){
				return python
			} else if (i === 2){
				return react
			} 
		}
