// for of 

const arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
    
}


//map
const map = new Map()
map.set('In',"India")
map.set('USA',"United state of america")
map.set('Fr',"France")
map.set('cn',"canada")


// console.log(map);

for (const str of map) {
    // console.log(str);
    
}

for (const [key , value] of map) {
    // console.log(key,":-" ,value);
    
}


const myobj= {
    In:'india',
    USA : 'United state of america',
    Fr : 'France',
    cn : 'canada'
}

for (const [key, value] of myobj) {
        console.log(key,":-" ,value);

}

