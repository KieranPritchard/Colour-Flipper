// Changes the elements based on colour
function displayColour(colour) {
    if (colour === 'red') {
        document.getElementById('background').style.backgroundColor = '#FF0800';
        document.getElementById('display-colour').innerHTML = 'Red';
    } else if (colour === 'yellow') {
        document.getElementById('background').style.backgroundColor = '#FFEF00';
        document.getElementById('display-colour').innerHTML = 'Yellow';
    } else if (colour === 'orange') {
        document.getElementById('background').style.backgroundColor = '#FF4F00';
        document.getElementById('display-colour').innerHTML = 'Orange';
    } else if (colour === 'green') {
        document.getElementById('background').style.backgroundColor = '#8DB600';
        document.getElementById('display-colour').innerHTML = 'Green';
    } else if (colour === 'blue') {
        document.getElementById('background').style.backgroundColor = '#007FFF';
        document.getElementById('display-colour').innerHTML = 'Blue';
    } else if (colour === 'purple') {
        document.getElementById('background').style.backgroundColor = '#6F00FF';
        document.getElementById('display-colour').innerHTML = 'Purple';
    } else if (colour === 'pink') {
        document.getElementById('background').style.backgroundColor = '#FF91AF';
        document.getElementById('display-colour').innerHTML = 'Pink';
    }
}

// Function to randomly change colour
function changeColour() {
    let randomColour = Math.floor(Math.random() * 8);

    switch (randomColour) {
        case 1:
            displayColour('red');
            break;
        case 2:
            displayColour('orange');
            break;
        case 3:
            displayColour('yellow');
            break;
        case 4:
            displayColour('green');
            break;
        case 5:
            displayColour('blue');
            break;
        case 6:
            displayColour('purple');
            break;
        case 7:
            displayColour('pink');
            break;
    }
}
