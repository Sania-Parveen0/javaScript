
// for in
const myObj ={
    js:"javascript",
    py:"python",
    sw:"swift",
    rb:"Ruby",
    jv:"java",

}

for (const key in myObj) {
  console.log(`${key} is shortcart for ${myObj[key]}`);
  
}

for (const str in myObj) {
  console.log(myObj[str]);
  
}