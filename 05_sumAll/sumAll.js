const sumAll = function(from, to) {
    if (!isPositiveInteger(from) || !isPositiveInteger(to)) return "ERROR";

    if (from < to)
    {
        return to * (to + 1) / 2 - from * (from - 1) / 2;
    }
    else
    {
        return from * (from + 1) / 2 - to * (to - 1) / 2;
    }

    function isPositiveInteger(num)
    {
        return Number.isInteger(num) && num >= 0;
    }
};

// Do not edit below this line
module.exports = sumAll;
