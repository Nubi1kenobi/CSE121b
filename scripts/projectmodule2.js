//projectmodule2.js

export function tempComment(currentTemp, yourWeather) {
    let textOutAgain;

    if (currentTemp <= 0) {
        textOutAgain = `Wow, ${yourWeather.temp}°F huh? You might want to pull out the ice trays and make some free ice!`;
    } else if (currentTemp <= 32) {
        textOutAgain = `Wow, ${yourWeather.temp}°F is sure pretty cold!<br>`;
    } else if (currentTemp > 32 && currentTemp <= 64) {
        textOutAgain = `Wow, ${yourWeather.temp}°F is sure pretty brisk,!<br>`;
    } else if (currentTemp > 64 && currentTemp <= 99) {
        textOutAgain = `Wow, ${yourWeather.temp}°F is sure pretty warm!<br>`;
    } else if (currentTemp > 99) {
        textOutAgain = `Wow, ${yourWeather.temp}°F. You should get inside and enjoy some AC, bruh!<br>`;
    }

    document.querySelector('#cityWeatherComment').innerHTML = textOutAgain;
};



