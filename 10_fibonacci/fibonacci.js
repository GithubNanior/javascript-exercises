let cache = new Object();

const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number == 0) return 0;
    if (number == 1) return 1;

    if (cache[number] === undefined)
    {
        cache[number] = fibonacci(number-1) + fibonacci(number-2);
    }

    return cache[number];
};

// Do not edit below this line
module.exports = fibonacci;
