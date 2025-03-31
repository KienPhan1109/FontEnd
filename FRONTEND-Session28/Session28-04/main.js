let rectangle = [
    {
        width: 10,
        height: 5,
        getArea: function() {
            return this.width * this.height;
        },
    }
]

rectangle.forEach((r) => {
    console.log(`Width: ${r.width}`);
    console.log(`Height: ${r.height}`);
    console.log(`Area: ${r.getArea()}`);
});
