// const input = document.querySelector("#linkInput")
// const form = document.getElementById('#linkForm');
// form.addEventListener('submit',function (e) {
//     e.preventDefault()
//     const link = input.value.trim()

//      if (link) {
//     // Save link in local storage
//     localStorage.setItem('savedLink', link);
//     alert(`✅ Link saved: ${link}`);

//     // Clear input field
//     input.value = '';
//   } else {
//     alert('⚠️ Please enter a valid link!');
//   }
    
// })

// Select form and input
const form = document.getElementById('linkForm');
const input = document.getElementById('linkInput');

// Add event listener for form submit
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Stop page reload

  const link = input.value.trim(); // Get link value

  if (link) {
    // Save link in local storage
    localStorage.setItem('savedLink', link);
    alert(`✅ Link saved: ${link}`);

    // Clear input field
    input.value = '';
  } else {
    alert('⚠️ Please enter a valid link!');
  }

  const saved = localStorage.getItem('savedLink');
console.log(saved);
console.log(typeof saved);

const xhr = new XMLHttpRequest()
xhr.open('get',saved)
console.log(xhr.readyState);
// const data = this.responseText

 console.log(data);
console.log(data.followers);

 xhr.onreadystatechange= function () {

const data = JSON.parse(this.responseText)
       console.log(data);
        console.log(data.followers);

 }
xhr.send()

});

