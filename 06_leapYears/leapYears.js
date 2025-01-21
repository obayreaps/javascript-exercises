const leapYears = function(year) {
    // Solution 1
    // if(year % 4 == 0)
    // {
    //     if(year % 100 == 0)
    //     {
    //         if(year % 400 == 0)
    //             return true;
    //         return false;
    //     }
    //     return true;
    // }
    // return false;

    // Solution 2
    const divisableBy4 = year % 4 === 0;
    const divisableBy100 = year % 100 === 0;
    const divisableBy400 = year % 400 === 0;

    if(divisableBy4 && (!divisableBy100 || divisableBy400))
        return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
