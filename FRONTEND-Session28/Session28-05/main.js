const company = {
    name: "RikkeiSoft",
    location: "Hà Nội",
    employees: [
        { name: "Nguyễn Văn Luận", position: "Developer" },
        { name: "Nguyễn Văn Hoàng", position: "Tester" },
        { name: "Hoàng Nam Cao", position: "Manager" }
    ]
};

console.log(`Company Name: ${company.name}`);

company.employees.forEach((e, index) => {
    console.log(`\nEmployee ${index + 1}:`);
    console.log(`  Name: ${e.name}`);
    console.log(`  Position: ${e.position}`);
});
