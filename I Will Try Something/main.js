class HTML{
	constructor(config, infosection, _alert){
		this.config = config
		this.infosection = infosection
		this._alert = _alert
	}

	static newDiv = () => document.createElement("div")
	static textNode = text => document.createTextNode(text)
	static addText = (destiny, text) => destiny.appendChild(this.textNode(text))
	static newLi = ul => ul.appendChild(document.createElement("li"))

	static run = (config, infosection, _alert) => {
		let obj = new HTML(config, infosection, _alert)
		let divs = obj.config.divs.map(e => obj.config.root.appendChild(this.newDiv()))

		let divAside = document.createElement("div")
		divAside.classList.add("asTi")
		divs[2].appendChild(divAside)

		this.addText(document.getElementsByClassName("asTi")[0], obj.config.listContentTitle)
		divs[2].appendChild(document.createElement("ul"))
		let getul = document.getElementsByTagName("ul")[0]

		let keysAside;
		let divSect = document.createElement("div")
		divSect.classList.add(obj.config.divs[1] + "t")

		divs.map((e, i) => {
			e.classList.add(obj.config.divs[i])
			keysAside = Object.keys(obj.config.content[2])

			i === 0 || i === 3 ? this.addText(e, obj.config.content[i]) : false
			i === 1 ? this.addText(e.appendChild(divSect), obj.config.content[i]) : false
		})

		keysAside.map(e => this.newLi(getul))
		let tagLi = document.getElementsByTagName("li")

		for (let x = 0; x < tagLi.length; x++){
			this.addText(tagLi[x], obj.config.content[2]["li"+(x+1)])
			tagLi[x].classList.add(keysAside[x])
		}

		obj.infosection("click", obj._alert)
	}
}