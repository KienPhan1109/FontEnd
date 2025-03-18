for (let i = 0; i < 10; i++) {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)})`;

    console.log(`%cMàu sắc đã được thay đổi`, `color: ${randomColor};`);
}
