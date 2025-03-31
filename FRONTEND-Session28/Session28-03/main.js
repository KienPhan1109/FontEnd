let book = [
    {
        title: "JavaScript Basics",
        author: "John Smith",
        page: 200
    }
]

delete book[0].page;

book.forEach((b) => {
    console.log(`Title: ${b.title}`);
    console.log(`Author: ${b.author}`);
    console.log(`Page: ${b.page}`);
});