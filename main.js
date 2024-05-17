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
var planetInfo = {
    'Pluto': {
        info: 'Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune.',
        url: 'https://en.wikipedia.org/wiki/Pluto'
    },
    'Neptune': {
        info: 'Neptune is the eighth and farthest planet from the Sun in the Solar System.',
        url: 'https://en.wikipedia.org/wiki/Neptune'
    },
    'Uranus': {
        info: 'Uranus is the seventh planet from the Sun. It has a unique side rotation.',
        url: 'https://en.wikipedia.org/wiki/Uranus'
    },
    'Saturn': {
        info: 'Saturn is known for its extensive ring system.',
        url: 'https://en.wikipedia.org/wiki/Saturn'
    },
    'Jupiter': {
        info: 'Jupiter is the largest planet in the Solar System.',
        url: 'https://en.wikipedia.org/wiki/Jupiter'
    },
    'Mars': {
        info: 'Mars is known as the Red Planet due to its reddish appearance.',
        url: 'https://en.wikipedia.org/wiki/Mars'
    },
    'Moon': {
        info: 'The Moon is Earth\'s only natural satellite.',
        url: 'https://en.wikipedia.org/wiki/Moon'
    },
    'Earth': {
        info: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
        url: 'https://en.wikipedia.org/wiki/Earth'
    },
    'Venus': {
        info: 'Venus is the second planet from the Sun and has a very thick atmosphere.',
        url: 'https://en.wikipedia.org/wiki/Venus'
    },
    'Mercury': {
        info: 'Mercury is the closest planet to the Sun and the smallest planet in the Solar System.',
        url: 'https://en.wikipedia.org/wiki/Mercury_(planet)'
    },
    'Sun': {
        info: 'The Sun is the star at the center of the Solar System and by far its most important source of energy.',
        url: 'https://en.wikipedia.org/wiki/Sun'
    }
}

var dropDown = document.getElementById("planets");


for (var i = 0; i < planets.length; i++) {
    var opt = planets[i][0];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    dropDown.appendChild(el);
}

function calculateWeight(weight, planetName) {
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
        var additionalInfo = planetInfo[planetName];
        outputMessage.innerHTML = `If you were on the Sun, you would weigh ${result}lbs!<br><br>${additionalInfo.info} <a href="${additionalInfo.url}" target="_blank">Learn more</a>.`
    } else if (planetName.toLowerCase() === 'moon') {
        result = calculateWeight(userWeight, planetName);
        var additionalInfo = planetInfo[planetName];
        outputMessage.innerHTML = `If you were on the Moon, you would weigh ${result}lbs!<br><br>${additionalInfo.info} <a href="${additionalInfo.url}" target="_blank">Learn more</a>.`
    } else {
        var result = calculateWeight(userWeight, planetName);
        var additionalInfo = planetInfo[planetName];
        outputMessage.innerHTML = `If you were on ${planetName}, you would weigh ${result.toFixed(2)} lbs!<br><br>${additionalInfo.info} <a href="${additionalInfo.url}" target="_blank">Learn more</a>.`;
    }
    }
