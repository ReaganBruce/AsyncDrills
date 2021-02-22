document.addEventListener("DOMContentLoaded", function(){
  
  function sayMessage(message) {
      console.log(message);
  }
  sayMessage("Hey, this is a message!");
  
  setTimeout(()=>{
      sayMessage('Hello, this message takes 2 seconds!');
  }, 2000);
  
  
  function getWords(firstWord, secondWord, thirdWord, fourthWord) {
      setTimeout(()=>{
          console.log(firstWord)
          setTimeout(()=>{
              console.log(secondWord)
              setTimeout(()=>{
                  console.log(thirdWord)
                  setTimeout(()=>{
                      console.log(fourthWord)
                  },1000)
              },2000)
          },3000)
      },0)
  }
  getWords('0 seconds', '3 seconds', '2 seconds', '1 second');
  
  Recursion
  function done(){
      console.log(`Job's done!`);
  }

  function countDown(num, callBack){
      setTimeout(()=>{
          if(num > 0){
              console.log(num);
              countDown(num - 1, callBack);
          } else{
              done();
          }
      },1000)
  }
  
  countDown(10, done);
  
  
  
  
  const lunchTime = true;
  
  function orderMeSomeFood(){
      return new Promise((resolve, reject) => {
        if (lunchTime == true){
            let myLunch = {
                lunch: 'Marinated Tofu',
                drink: 'La Croix'
            }
          resolve(myLunch);
        } else{
          let error = new Error('Eat real food, idiot.');
          reject(error);
        }
  
      })
  }
  orderMeSomeFood()
  .then((resolve) =>{
      console.log(resolve);
  })
  orderMeSomeFood()
  .catch((error) =>{
      console.log(error)
  })
})

