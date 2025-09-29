 const allBtn = document.querySelectorAll(".button")
//  console.log(allBtn);
 const cBody = document.querySelector("body")
//  console.log(cBody);

allBtn.forEach(function(btn){
    btn.addEventListener("click" , function(e){
         console.log("btn clicked");
        
        if(e.target.id ==="grey"){
            cBody.style.backgroundColor = e.target.id
            
        }

          if(e.target.id ==="blue"){
            cBody.style.backgroundColor = e.target.id
            
        }

          if(e.target.id ==="white"){
            cBody.style.backgroundColor = e.target.id
            
        }

          if(e.target.id ==="yellow"){
            cBody.style.backgroundColor = e.target.id
            
        }
    })
    
})
    



   
    
 
 
 