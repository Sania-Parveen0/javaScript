
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const bodyElmnt = document.body;




 startBtn.style.backgroundColor= "white"
 startBtn.style.color="#0e580e"
 startBtn.style.borderRadius = "15px"
 startBtn.style.Height = "20px"
 startBtn.style.width = "50px"


 stopBtn.style.backgroundColor= "white"
 stopBtn.style.color="#bd0b0b"
 stopBtn.style.borderRadius = "15px"
 stopBtn.style.Height = "20px"
 stopBtn.style.width = "50px"

//generating random hexcode
const RandomColor = function () {
    const Hex = "0123456789ABCDEF"
    let color= "#"
    for (let i = 0; i<6; i++) {
      color+=Hex[Math.floor(Math.random()*16)]
      
    }
    return color;
}

  
//to change the color
   let change = function () {
   bodyElmnt.style.backgroundColor = RandomColor();
    
   }

   

let toChange
//to start the disco
startBtn.addEventListener('click',function () {
if(!toChange){
toChange = setInterval(change,1000)
}

})
//to stop the disco
stopBtn.addEventListener('click',function () {

clearInterval(toChange)
toChange = null
})



