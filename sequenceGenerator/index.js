//Задача 2.2

function sequence(start = 0, step = 1) {
    function* generator(start, step) {
        while (true) {
            yield start;
            start += step;
        }
    }
    const gen = generator(start, step);

    return function() {
        return gen.next().value;
    }
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator2()); // 7
console.log(generator()); // 16
console.log(generator2()); // 8