/*
File name:                   rolling.js
Description:                 Functionality for the html webpage
Created:                     Faran Bhatti
Edited:                      2023-02-21 by Faran Bhatti (FB)
Last Edited:                 2023-02-23 by Faran Bhatti (FB)
*/

// Function to compute the result of rolling a die
function rollem() {
    let total = 0;
    let n = document.getElementById('num').value;
    let p = '';
  
    for (let i = 0; i < n; i++) {
      let r = Math.ceil(Math.random() * 6);
      total += r;
      p += `<span><img src="${r}.jpg" alt="face ${r}" width="50" height="50"> </span>`;
    }
  
    p += `<br>Total: ${total}`;
    document.getElementById('output').innerHTML = p;
  }