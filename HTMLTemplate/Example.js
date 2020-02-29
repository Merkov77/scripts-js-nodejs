let content = "Hi world "

let htmlBase = {
	root : [ "root", { bootstrap : "container-fluid" } ],
	main : {
		header : { 
			type : "div",
			class : "child1",
			bootstrap : "row p-4 bg-dark text-light font-weight-bold",
			content : content + 1
		},
		section : { 
			type : "div",
			class : "child2",
			bootstrap : "row p-4 bg-light text-dark font-weight-bold",
			content : content + 2
		},
		aside : { 
			type : "div",
			class : "child3",
			bootstrap : "row p-4 bg-secondary text-light font-weight-bold",
			content : content + 3
		},
		footer : { 
			type : "div",
			class : "child4",
			bootstrap : "row p-4 bg-success text-light font-weight-bold",
			content : content + 4
		}
	}
}

let subBoxes = {
	header : {
		subchild : {
			type : "div",
			class : "subchild1",
			content :"Subchild1",
			bootstrap : "col-md-12 bg-info "
		}
	},
	section : {
		subchild : {
			type : "div",
			class : "subchild2",
			content :"subchild2",
			bootstrap : "col-md-12 bg-info "
		}
	}, 
	aside : {
		subchild : {
			type : "div",
			class : "subchild3",
			content :"Subchild3",
			bootstrap : "col-md-12 bg-info "
		}
	},
	footer : {
		subchild : {
			type : "div",
			class : "subchild4",
			content :"Subchild4",
			bootstrap : "col-md-12 bg-info "
		}
	}
}

let subBoxes2 = {
	subchild1 : {
		subchild : {
			type : "div",
			class : "subchild11",
			content :"subchild1 de Subchild1",
			bootstrap : "col-md-12 bg-danger "
		}
	},
	subchild2 : {
		subchild : {
			type : "div",
			class : "subchild22",
			content :"subchild1 de Subchild2",
			bootstrap : "col-md-12 bg-danger "
		}
	}, 
	// subchild3 : {
	// 	subchild : {
	// 		type : "div",
	// 		class : "subchild33",
	// 		content :"subchild1 de Subchild3",
	// 		bootstrap : "col-md-12 bg-danger "
	// 	}
	// },
	subchild4 : {
		subchild : {
			type : "div",
			class : "subchild44",
			content :"subchild1 de Subchild4",
			bootstrap : "col-md-12 bg-danger "
		}
	},
}



let htmlRoot = new HTMLRoot(htmlBase)
let htmlInside1 = new HTMLInside([htmlRoot, subBoxes])
let htmlInside2 = new HTMLInside([htmlInside1, subBoxes2])

