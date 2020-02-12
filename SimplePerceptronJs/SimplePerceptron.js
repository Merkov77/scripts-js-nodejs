class simplePerceptron{
  constructor(){
    this.db = [[1, 1, 1],[1, 0, 0],[0, 1, 0],[0, 0, 0]] //Data to learn
    this.weights = [Math.random() * 1.0, Math.random() * 1.0, Math.random() * 1.0] //Weights for each neuron data entry
    this.learning = true; // To hold active "While" loop, whereas the neural function learns
    this.outputInteger; // To transform the final answer long in 1 or 0
    this.iterations = 0; //To count iterations
    this.tasaLearning = 0.3; //To use in Frank Rosenblatt's formula
  }

  Neuron(){
    while (this.learning) {
      this.iterations++
      this.learning = false;
      for (let count = 0; count <= 3; count++){
        this.outputInit = this.db[count][0] * this.weights[0] + this.db[count][1] * this.weights[1] + this.weights[2] // Calculate First Output, this is important
        this.outputInteger = (this.outputInit > 0) ? 1 : 0; // Transform to values ​​0 or 1 //Perceptron
        this.error = this.db[count][2] - this.outputInteger;
        if (this.error != 0){// If the output does not match what was expected, change the weights with Frank Rosenblatt's formula
          this.weights[0] += this.tasaLearning * this.error * this.db[count][0]
          this.weights[1] += this.tasaLearning * this.error * this.db[count][1]
          this.weights[2] += this.tasaLearning * this.error * 1;
          this.learning = true;
        }
      }
    }

    console.log("Iterations:", this.iterations)
    console.log("Weight 1:", this.weights[0])
    console.log("Weight 2:", this.weights[1])
    console.log("Weight 3:", this.weights[2])

    for (let count = 0; count <= 3; count++){
      let outputInit; let outputInteger;
      outputInit = this.db[count][0] * this.weights[0] + this.db[count][1] * this.weights[1] + this.weights[2] // Calculate First Output, this is important

      outputInteger = (outputInit > 0) ? 1 : 0; //Perceptron
      console.log("Entries:", this.db[count][0], "&", this.db[count][1], "=", this.db[count][2],"|", "Perceptron", outputInteger)
    }
  }
}

let sP = new simplePerceptron()
sP.Neuron()
