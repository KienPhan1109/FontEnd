let input = ["", false, 0, 5, 10, "Hello world!"]; 
let output = [];

for (let i = 0; i < input.length; i++) {
    if (input[i]) {
        output.push(input[i]);
    }
}

console.log(output);
