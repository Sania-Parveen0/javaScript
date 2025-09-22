//map

const pLang = [1,2,3,4,5,6,7,8,9,10]

const num2 = pLang
                .map((val)=>val*10)
                    .map((val)=>val+1)
                        .filter((val)=>val>40)

console.log(num2)