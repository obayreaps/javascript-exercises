const removeFromArray = function(arr, ...target) {

    const newArr = [];

    for(const num of arr)
    {
        if(!target.includes(num))
            newArr.push(num);
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
