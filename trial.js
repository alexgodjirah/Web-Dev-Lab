const Array = [1, 2, 3, 4, 5, 6];

const foreach = Array.forEach((e) => {
    return e + 1;
});

const map = Array.map((e) => {
    return e + 2;
});

console.log(foreach, map);
console.log(Array.length);
