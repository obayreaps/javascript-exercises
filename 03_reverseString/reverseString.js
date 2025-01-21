const reverseString = function(string) {
    // let newString = "";
    // for(let i = string.length - 1; i >= 0; i--)
    //     newString += string[i];
    // return newString;

    // Improved method Hello -> H,e,l,l,o -> o,l,l,e,H -> olleH
    return string.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
