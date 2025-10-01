const myForm =  document.querySelector('form')

myForm.addEventListener("submit", function(e){
    e.preventDefault()
    const myHeight = parseInt(document.querySelector('#height').value)
    const myWeight = parseInt(document.querySelector('#weight').value)
    const myResult = document.querySelector('#results')
    const myRange = document.querySelector('#range')

    console.log(myHeight , myWeight);

    if(myHeight==="" || myHeight<=0 || isNaN(myHeight)){
        myResult.innerHTML= "invalid height"
    } 
    else if(myWeight==="" || myWeight<=0 || isNaN(myWeight)){
        myResult.innerHTML= "invalid weight"
    }
    else{
        const bmi =  (myWeight/(myHeight * myHeight)* 10000).toFixed(2)
            myResult.innerHTML= `${bmi}`


        if(bmi<18.6){
            myRange.innerHTML = "under weight"
        } 
        else if(bmi>18.6&& bmi<24.9){
            myRange.innerHTML = "Normal Range"
        }
         else{
            myRange.innerHTML = "over weight"
        }
        
    }
    

})



