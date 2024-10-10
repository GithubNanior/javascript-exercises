const sumAll = function(from, to) {
    if (from < to)
    {
        return to * (to + 1) / 2 - from * (from - 1) / 2;
    }
    else
    {
        return from * (from + 1) / 2 - to * (to - 1) / 2;
    }
};

// Do not edit below this line
module.exports = sumAll;
