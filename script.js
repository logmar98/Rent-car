const selects = document.querySelectorAll('.car');

selects.forEach((select) => {

    select.addEventListener('click', () => {
        selects.forEach((select) => {
            select.style.color = "black";
            select.style.backgroundColor = "#e9e9e9";
        })
        select.style.backgroundColor = "#ff4d30";
        select.style.color = "#fff";
        changeInfo(select.textContent);
    });
});

function changeInfo(carName) {
    let car = [];

    var model = document.getElementById("model");
    var mark = document.getElementById("mark");
    var year = document.getElementById("year");
    var doors = document.getElementById("doors");
    var AC = document.getElementById("AC");
    var transmission = document.getElementById("transmission");
    var fuel = document.getElementById("fuel");
    var img = document.getElementById("car-img");
    var price = document.getElementById("price");

    switch (carName) {
        case 'volkswagen golf 6':
            car = ["golf 6", "volkswagen", 2010, 4, "yes", "manual", "diesel", "car1", "100Dh"];
            break;
        case 'Toyota Camry':
            car = ["camry", "toyota", 2015, 2, "yes", "auto", "Gasoline", "car2", "150Dh"];
            break;
        case 'Ford Mustang':
            car = ["Mustang", "Ford", 2020, 3, "no", "auto", "diesel", "car3", "200Dh"];
            break;
        case 'Honda Accord':
            car = ["Accord", "Honda", 2021, 6, "yes", "manual", "Gasoline", "car4", "250Dh"];
            break;
        case 'BMW 3 Series':
            car = ["3 Series", "BMW", 2002, 5, "yes", "auto", "diesel", "car5", "300Dh"];
            break;
    
        default:
            break;
    }

    model.innerHTML = car[0];
    mark.innerHTML = car[1];
    year.innerHTML = car[2];
    doors.innerHTML = car[3];
    AC.innerHTML = car[4];
    transmission.innerHTML = car[5];
    fuel.innerHTML = car[6];
    img.src = "image/" + car[7] + ".png";
    price.innerHTML = car[8];

}