const palindromes = function (text) {
    const cleanText = text.toLowerCase().split("").filter((char) => (char >= "a" && char <= "z") || (char >= "0" && char <= "9")).join("");
    let halfCount = Math.floor(cleanText.length / 2);

    return cleanText.substring(0, halfCount) === cleanText.substring(cleanText.length - halfCount).split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
