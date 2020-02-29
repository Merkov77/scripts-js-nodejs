class HTMLRoot {
	main(config){
		let classes = []; let divNames = [];
		let root = document.getElementById(config.root[0])
		Object.keys(config.main).map((e,i)=> {
			if (i !== undefined && e !== undefined){
				let child = document.createElement(config.main[e].type)
				child.classList.add(config.main[e].class);
				root.appendChild(child)	
				classes.push(config.main[e].class)
				divNames.push(e)
			}
		})
		return [{ classes:classes, divNames:divNames }]
	}
	write(config){
		Object.keys(config.main).map((e,i)=> {
			if (i !== undefined && config.main[e].content !== undefined){
				let p = document.createTextNode(config.main[e].content)
				let selectChilds = document.querySelector("."+config.main[e].class)
				selectChilds.appendChild(p)
			}
		})
	}
	bootstrap(config){
		let root = document.getElementById(config.root[0])
		root.className += config.root[1].bootstrap
		Object.keys(config.main).map((e,i)=> {
			if (i !== undefined && config.main[e].class !== undefined && config.main[e].bootstrap !== undefined){
				let selectChilds = document.querySelector("."+config.main[e].class)
				selectChilds.className += " " + config.main[e].bootstrap
			}
		})
	}

	constructor(config){
		let x = this.main(config)
		this.write(config)
		this.bootstrap(config)
		return x
	}
}

class HTMLInside{
	main(configInside){
		let classesChild = []
		let divNames, classes, htmlInside; 
		if (configInside[0][0].divNames !== undefined && configInside[0][0].classes !== undefined ){
			divNames = configInside[0][0].divNames
			classes = configInside[0][0].classes
		} else {
			divNames = configInside[0]
			classes = configInside[0]
		}
		if (configInside[1] !== undefined){
			htmlInside = configInside[1]
		}

		let htmlInsideKeys = []
		Object.keys(htmlInside).map((e,i) =>{
			htmlInsideKeys.push(e)

			if (e === divNames[i]){
				let newSubChild = document.createElement(htmlInside[e].subchild.type)
				newSubChild.classList.add(htmlInside[e].subchild.class)
				let origin = document.querySelector("."+ classes[i])
				origin.appendChild(newSubChild)
				classesChild.push(htmlInside[e].subchild.class)
				
			} else {
          let nd = divNames.length - htmlInsideKeys.length
          
          let nobj = {
            [htmlInsideKeys[i]] : classes[i]
          }

          let newSubChild = document.createElement(htmlInside[e].subchild.type)
          newSubChild.classList.add(htmlInside[e].subchild.class)
          let origin = document.querySelector("."+Object.keys(nobj).toString())
          origin.appendChild(newSubChild)
          classesChild.push(htmlInside[e].subchild.class)
          console.warn("There is a different element between origin and reference")
			}
		})
		return classesChild
	}

	write(classesChilds, configInside){
		Object.keys(configInside[1]).map((e,i) => {
			let classChilds;
			if (classesChilds[i] !== undefined){
				classChilds = document.querySelector("."+classesChilds[i])
				if (configInside[1][e].subchild.content !== undefined && e !== undefined){
					let textNode = document.createTextNode(configInside[1][e].subchild.content)
					classChilds.appendChild(textNode)
				}	
			}
		})
	}

	bootstrap(classesChilds, configInside){
		Object.keys(configInside[1]).map((e,i) => {
			let classChilds;
			if (classesChilds[i] !== null && classesChilds[i] !== undefined){
				classChilds = document.querySelector("."+classesChilds[i])
				if (configInside[1][e].subchild.bootstrap !== undefined && e !== undefined){
					classChilds.className += " " + configInside[1][e].subchild.bootstrap
				}	
			}
		})
	}

	constructor(configInside){
		let x = this.main(configInside)
		this.write(x, configInside)
		this.bootstrap(x, configInside)
		return x
	}
}
