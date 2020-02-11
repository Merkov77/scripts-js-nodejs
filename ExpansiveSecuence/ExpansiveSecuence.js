//This function generate the next number using the original array sequences, the numbers are generate expansively

function ExpansiveSecuence(array){
  let arnumbers = array
  let sequences = arnumbers.map((e,i) => {
      return (arnumbers[i] - arnumbers[i+1]) * -1
  })
 
  arnumbers.map((e,i) => {
    if(i){
      let supros = arnumbers[arnumbers.length-1]  + sequences[i-1]
      arnumbers.push(supros)
    }
  })

  console.log(arnumbers)
  return arnumbers
}

ExpansiveSecuence([1,3,5,7,10,20,25])
