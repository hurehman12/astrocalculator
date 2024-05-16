var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

var dropDown = document.getElementById("planets");


for (var i = 0; i < planets.length; i++) {
    var opt = planets[i][0];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropDown.appendChild(el);
}

function calculateWeight(weight, planetName) {
    // var planetWeight;
    for (let i = 0; i < planets.length; i++) {
        if (planets[i][0] == planetName) {
            planetWeight = (weight * (planets[i][1]));
        }
    }
    return planetWeight;
    
}


function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value;
    var planetName = document.getElementById("planets").value;
    var outputMessage = document.getElementById("output");
    
    
    if (isNaN(userWeight) || userWeight === '') {
        outputMessage.innerHTML = "Please enter a valid number for weight.";
        return; 
    }
    
    if (planetName === '') {
        outputMessage.innerHTML = "Please select a planet.";
        return; 
    }

    var result;
    if (planetName.toLowerCase() === 'sun') {
        result = calculateWeight(userWeight, planetName);
        outputMessage.innerHTML = `If you were on the Sun, you would weigh ${result}lbs!`;
    } else if (planetName.toLowerCase() === 'moon') {
        result = calculateWeight(userWeight, planetName);
        outputMessage.innerHTML = `If you were on the Moon, you would weigh ${result}lbs!`;
    } else {
        result = calculateWeight(userWeight, planetName);
        outputMessage.innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
    }
}
