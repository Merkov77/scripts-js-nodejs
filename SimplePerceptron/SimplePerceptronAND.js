/*
  **
    SimplePerceptron AND Using JS
  **
*/

class SimplePerceptron{
  constructor(){
    this.dataBaseForLearn = [[1,1,1],[1,0,0],[0,1,0],[0,0,0]]
  }

  j(e1, p1, e2, p2, u){
    let output = e1 * p1 + e2 * p2 + 1 * u //Formula
    console.log("Learning:",output)
    return (output > 0) ? 1 : 0;   
  }

  validate(e1,p1,e2,p2,u){
    let output = this.j(e1,p1,e2,p2,u);  
      this.dataBaseForLearn.map((e,i) => {
        if (e1 != e2 || e1 === 0 && e2 === 0){ // Using AND
          if (output !== e[2]){
            p1 = output * -i * i/2.5 //New weight
            p2 = output * -i * i/2.5 //New weight
            u = output * -i * i/2.5 //New weight
            this.output = this.j(e1,p1,e2,p2,u) //Recall j Perceptron Process
            this.bol = false; //Signal 
          } 
        } else{
          this.output = output
          this.bol = true; //Signal 
        }
      })

      return (this.bol === true) ? "result: " + this.output + " --- Finished, I needn't repeat the process" :  "result: " + this.output + " --- Finished I needed repeat the process"
  }
}

let e1, e2, p1, p2, u;

e1 = 1 // Data Input
e2 = 1 // Data Input

p1 = 0.9812 // Weight for Data Inpu1 1
p2 = 3.7193 // Weight for Data Inpu1 2
u =  2.1415 // Umbral Weight  (Third Internal Entry )

let nN = new SimplePerceptron();
let output = nN.validate(e1, p1, e2, p2, u)

console.log(output) 

/*
  1, 1, 1 => 1
  1, 0, 0 => 0
  0, 1, 0 => 0
  0, 0, 0 => 0
*/

//If e1 and e2 are equals to one, they must return 1, if they are equals to 0, they must return 0, and if they are different, they are must return 0
