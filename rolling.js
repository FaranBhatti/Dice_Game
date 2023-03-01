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
    let p = document.getElementById('output').innerHTML;
  
    if (p !== "") {
        p = p.concat("<hr>");
    }
    else {
        p = p.concat('<button id="clear" onclick="clearme()" style="float:right;">Clear</button>');
    }
    if (n < 1 || n > 10) {
        alert("You can roll 1 to 10 dice.");
    }
    else {
        for (let i = 0; i < n; i++) {
            let r = Math.ceil(Math.random() * 6);
            total += r;
            p += `<span><img src="${r}.jpg" alt="face ${r}" width="50" height="50"> </span>`;
        }
    }
  
    p += `<br>Total: ${total}`;
    document.getElementById('output').innerHTML = p;
  }

// Clear me function
function clearme() {
    document.getElementById('output').innerHTML = '';
}