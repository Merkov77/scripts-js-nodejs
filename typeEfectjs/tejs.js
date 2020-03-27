let root = document.getElementById("root")


function typeWrite(text, time){

	let count = 0; let interval1, interval2;
	let mess = text
	
	let interval = setInterval(()=>{
		if (count < mess.length){
			if (mess[count-1] != "," && mess[count-1] != "." ){
				if (mess[count] != undefined){
					root.textContent += mess[count++] 	
				}
			} else{
				setTimeout(()=>{
					if (mess[count] != undefined){
						root.textContent += mess[count++] 	
					}
				}, 500)
			}
		} else {
			clearInterval(interval)
			console.log("End")
		}	
	},time)
}





let mesage = `Hail Dantalion`

typeWrite(mesage, 40)

