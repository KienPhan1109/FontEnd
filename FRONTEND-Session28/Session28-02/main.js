let car = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
    }
];

car[0].color = "red";  
car[0].year = 2022;  

car.forEach((c) => {
    console.log(`Brand: ${c.brand}`);
    console.log(`Model: ${c.model}`);
    console.log(`Year: ${c.year}`);
    console.log(`Color: ${c.color}`);
});
