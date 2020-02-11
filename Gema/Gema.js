//Matrix extension that creates regular number sequences

let Gema = [];

Gema.New = (x,y,z,w) => {
  let opone = [x, y, z, w].map(e => (Number(e) && Number(x)) ? Math.round(e * x) : e  )
  let optwo = [x, y, z, w].map(e => (Number(e) && Number(y)) ? Math.round(e * y) : e  )
  let opthree = [x, y, z, w].map(e => (Number(e) && Number(z)) ? Math.round(e * z) : e  )
  let opfour = [x, y, z, w].map(e => (Number(e) && Number(w)) ? Math.round(e * w) : e  )

  let chagen = [opone, optwo, opthree, opfour]

  return chagen
}

let g = Gema.New(10,5,5,10)

/* //console.log(g)

  [
    [ 100, 50, 50, 100 ],
    [ 50, 25, 25, 50 ],
    [ 50, 25, 25, 50 ],
    [ 100, 50, 50, 100 ]
  ]
  
*/
 
