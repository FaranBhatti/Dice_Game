/*
File name:                   rolling.js
Description:                 Functionality for the html webpage
Created:                     Faran Bhatti
Edited:                      2023-02-21 by Faran Bhatti (FB)
Last Edited:                 2023-02-23 by Faran Bhatti (FB)
*/

// Function to compute the result of rolling a die
function rollem() {
    var total = 0;
    var n = document.getElementById('num').value;
    var p = "";
    for (let i = 0; i < (n + 1); i++)
    {
        var r = Math.ceil(Math.random() * 6);
        r += total;
        p += "face:" + r + ", ";
    }
    p += "Total: " + total;
    p = document.getElementById('output').innerHTML;
}