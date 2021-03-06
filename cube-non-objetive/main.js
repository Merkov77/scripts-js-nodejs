let training = []
  const root = document.getElementById("root")

  const player = document.createElement("div")
  player.className = "player p-4  bg-primary"
  player.animate([{
    boxShadow:"inset 0px 0px 20px black"
  },{
    boxShadow:"inset 0px 0px 0px black"
  }],{duration:400, iterations:1})

  const player2 = document.createElement("div")
  player2.className = "player p-4  bg-danger"
  player2.animate([{
    boxShadow:"inset 0px 0px 20px black"
  },{
    boxShadow:"inset 0px 0px 0px black"
  }],{duration:400, iterations:1})

  const player3 = document.createElement("div")
  player3.className = "player p-4  bg-warning"
  player3.animate([{
    boxShadow:"inset 0px 0px 20px black"
  },{
    boxShadow:"inset 0px 0px 0px black"
  }],{duration:400, iterations:1})

  let count = 0
  for (let x = 0; x < 30; x++){
    const div = document.createElement("div")
    div.className = "minsize m-2 p-3 rounded flex-grow-1 position-relative"
    if (x === 0){
      div.appendChild(player)
      div.appendChild(player2)
      div.appendChild(player3)
    }
    if (x % 2){
      div.classList.add("alert-dark")
    } else{
      div.classList.add("alert-primary")
    }
    root.appendChild(div)

  }

  training = [
    {
      input: {
        0:0.1,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{6:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0.2,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{10:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0.3,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{16:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0.4,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{20:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0.5,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{26:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0.6,27:0,28:0,29:0
      }, output:{22:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0.5,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{28:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0.6,29:0
      }, output:{24:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0.5,
        25:0,26:0,27:0,28:0,29:0
      }, output:{18:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0.4,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{14:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0.3,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{8:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0.2,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{4:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0.1,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{8:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0,8:0.2,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{2:1}
    },{
      input: {
        0:0,1:0,2:0,3:0.1,4:0,
        5:0,6:0,7:0,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{7:1}
    },{
      input: {
        0:0,1:0,2:0,3:0,4:0,
        5:0,6:0,7:0.2,8:0,9:0,
        10:0,11:0,12:0,13:0,14:0,
        15:0,16:0,17:0,18:0,19:0,
        20:0,21:0,22:0,23:0,24:0,
        25:0,26:0,27:0,28:0,29:0
      }, output:{12:1}
    }
  ]

  console.log(training)


  const netw = new brain.NeuralNetwork()
  netw.train(training)
  let retro = {}

  let pause = false
  let btnstart = document.getElementById("start")
  let btnpause = document.getElementById("pause")

  btnpause.onclick = function(){
    pause = !pause
    btnpause.innerHTML = pause ? "Continue" : "Pause"
  }

  btnstart.onclick = function(){
    let interval = setInterval(function(){
      if (pause === false){
        let input = [0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        if (retro !== undefined){
          input[retro] = 1
        }

        let result = brain.likely(input, netw)
        retro = result

        if (root.children[result] !== null && root.children[result] !== undefined){
            root.children[result].animate([{
              transform:"scale(0.8)"
            },{
              transform:"scale(1)"
            }],{duration:100, iterations:1})
            root.children[result].appendChild(player)

            setTimeout(function(){
              root.children[result].animate([{
              transform:"scale(0.8)"
            },{
              transform:"scale(1)"
            }],{duration:100, iterations:1})
              root.children[result].appendChild(player2)
            },3000)
            setTimeout(function(){
              root.children[result].animate([{
              transform:"scale(0.8)"
            },{
              transform:"scale(1)"
            }],{duration:100, iterations:1})
              root.children[result].appendChild(player3)
            },6000)
          }
        console.log(result)
      }
    },1000)
  }


