document.getElementById("open").addEventListener("click", function () {
    document.getElementById("hide").style.opacity = "1";
    document.getElementsByClassName("container")[0].style.backgroundColor =
        "rgb(113, 113, 113)";
});

document.getElementById("icon").addEventListener("click", function () {
    document.getElementById("hide").style.opacity = "0";
    document.getElementsByClassName("container")[0].style.backgroundColor =
        "white";
});
