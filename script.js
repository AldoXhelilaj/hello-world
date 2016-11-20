var cars = ["Saab", "Volvo", "Bmw"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

function removeFromArray(text){
    var n = cars.indexOf(text);
    cars.splice(n, 1);
    console.log(cars);
}

$(document).ready(function() {
    // var carsObjs = [{
    //     id: 1,
    //     name: "Saab",
    //     color: "brown",
    //     year: 1968
    // }, {
    //     id: 2,
    //     name: "Volvo",
    //     color: "green",
    //     year: 2000
    // }, {
    //     id: 3,
    //     name: "Bmw",
    //     color: "dark blue",
    //     year: 2015
    // }];



    $('#cars').on('change', function() {
        $.ajax({
            method: 'GET',
            url: 'object.json'
        }).then(function(response){
            var carsObjs = JSON.parse(response);

            var carId= $('#cars').val();
            if(carId != 'undefined' && carId != null && carId != '') {
                var selectedCar = {};

                for (var i = 0; i < carsObjs.length; i++) {
                    if (carsObjs[i].id == carId) {
                        selectedCar = carsObjs[i];
                        break;
                    }
                }

                var ul = document.getElementById('seCaOb');

                if (ul == null || ul == 'undefined') {
                    ul = document.createElement('ul');
                    ul.id = "seCaOb";
                    ul.style['list-style-type'] = "none";
                    ul.style.color = 'blue';
                    var output = document.getElementById('output')
                    output.appendChild(ul);
                } else {
                    while (ul.firstChild)
                        ul.removeChild(ul.firstChild);
                }

                var firstList = document.createElement('li');
                var firstText = document.createTextNode(selectedCar.name);
                firstList.appendChild(firstText);
                ul.appendChild(firstList);

                var secondList = document.createElement('li');
                var secondText = document.createTextNode(selectedCar.color);
                secondList.appendChild(secondText);
                ul.appendChild(secondList);

                var thirdList = document.createElement('li');
                var thirdText = document.createTextNode(selectedCar.year);
                thirdList.appendChild(thirdText);
                ul.appendChild(thirdList);
            }

        });
    });


    function capitalize(arg) {
        return arg.charAt(0).toUpperCase() + arg.slice(1);
    }

    function getLastParam() {
        var array = window.location.pathname.split("/");
    }

    var person = {
        id: 1,
        "working-company": {
            "company-name": "Talent Garden"
        }
    };

    console.log(person["working-company"]['company-name'].split(' ')[0]);
});