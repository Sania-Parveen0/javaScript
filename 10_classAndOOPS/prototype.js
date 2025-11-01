const myPrincess =["jasmine","ariel","rupanzel"]

const Prince ={
    jasmine:"aladin",
    ariel:"the sailor prince",
    rupanzel:"the theaf",
    groom: function () {
        console.log(`the prince of jasmin is ${this.jasmine}`);
        
    }
}
// console.log(Prince.groom());


Object.prototype.tellMeTheName=function () {
    console.log("its a prince");
    
}

// Prince.tellMeTheName()

// myPrincess.tellMeTheName()


const name = "sania"

String.prototype.printTheName=function () {
    console.log(`${this}`);
    
    console.log(`the true length is ${this.trim().length}`);
    
}
"sayan".printTheName()