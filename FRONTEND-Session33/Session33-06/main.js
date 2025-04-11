const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️",
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️",
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️",
    },
};

let btn = document.getElementById("btn");
let search = document.getElementById("search");

btn.addEventListener("click", () => {
    let cityName = search.value.trim();

    let formattedCity = Object.keys(weatherData).find(
        (city) => city.toLowerCase() === cityName.toLowerCase()
    );

    let data = weatherData[formattedCity];

    if (data) {
        document.getElementById("city").textContent = formattedCity;
        document.getElementById("icon").textContent = data.icon;
        document.getElementById(
            "temperature"
        ).textContent = `${data.temperature}°C`;
        document.getElementById("description").textContent = data.description;
        document.getElementById(
            "humidity"
        ).textContent = `Độ ẩm: ${data.humidity}%`;
        document.getElementById(
            "windSpeed"
        ).textContent = `Tốc độ gió: ${data.windSpeed} km/h`;
    } else {
        alert("Không tìm thấy thành phố!");
    }
});
