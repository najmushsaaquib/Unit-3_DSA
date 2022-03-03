function runProgram(input=''){
    input = input.trim().split("\n")
    let tc = +input[0]
    let line = 1;
    let que = []
    let front = 0;
    let rear = 0;
    
    for(let i=0; i<tc; i++){
        
        let [type,x] = input[line++].trim().split(' ')
        if(type == "E") {
            que.push(+x)
            console.log(que.length)
            rear++
        }
        else if(type == "D"){
                
            if(que.length == 0){
                
                console.log(-1,que.length)
            }    
            else console.log(que.shift(),que.length)
              
        }
    }
    
    

  }
   
 
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }