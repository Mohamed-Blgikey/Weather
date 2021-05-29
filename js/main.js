let inputSearch = document.getElementById("inputSearch");
let alertValid = document.getElementById("alertValid");

/**day 1 */

let day1 = document.getElementById("day1");
let date1 = document.getElementById("date1");
let locationName = document.getElementById("locationName");
let temp1 = document.getElementById("temp1");
let sunmoon1 = document.getElementById("sunmoon1");
let currentDay1Condition = document.getElementById("currentDay1Condition");

/*day 2*/

let day2 = document.getElementById("day2");
let localtime;
let sunmoon2 = document.getElementById("sunmoon2");
let maxtempDay2 = document.getElementById("maxtempDay2");
let minTempDay2 = document.getElementById("minTempDay2");
let conditionDay2;
let valueConditionDay2 = document.getElementById("valueConditionDay2");

/*day 3*/

let day3 = document.getElementById("day3");
let sunmoon3 = document.getElementById("sunmoon3");
let conditionDay3;
let valueConditionDay3 = document.getElementById("valueConditionDay3");

/**API */
let myHttpRequest = new XMLHttpRequest();


let date = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[date.getDay()];

let datetime = date.getDate();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];


day1.innerHTML = day;
date1.innerHTML = datetime + month;

day2.innerHTML = days[date.getDay() + 1];
day3.innerHTML = days[date.getDay() + 2];

/**static page */

let x = "alex";
myHttpRequest.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=61c6cbf289774e5d814230428210105&q=${x}&days=3`);
myHttpRequest.send();
myHttpRequest.addEventListener("readystatechange", function () {
    if (myHttpRequest.readyState == 4 && myHttpRequest.status == 200) {
        // console.log(JSON.parse(myHttpRequest.response));
        /**day 1 */

        locationName.innerHTML = JSON.parse(myHttpRequest.response).location.name;
        localtime = Number(JSON.parse(myHttpRequest.response).location.localtime.slice(11, 13));
        temp1.innerHTML = JSON.parse(myHttpRequest.response).current.temp_c + `<sup>o</sup>C`;
        if (localtime < 12) {
            sunmoon1.setAttribute("src", "image/weather/113.png");
        } else {
            sunmoon1.setAttribute("src", "image/weather/moon.png");
        }
        currentDay1Condition.innerHTML = JSON.parse(myHttpRequest.response).current.condition.text;


        /**day 2 */
        conditionDay2 = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.condition.text;
        if (conditionDay2.toLocaleLowerCase() == "sunny") {
            sunmoon2.setAttribute("src", "image/weather/113.png")
        } else if (conditionDay2.toLocaleLowerCase() == "partly cloudy") {
            if (localtime < 12) {
                sunmoon2.setAttribute("src", "image/weather/partlyCloudysun.png")
            } else {
                sunmoon2.setAttribute("src", "image/weather/partlyCloudymoon.png")
            }
        }
        else if (conditionDay2.toLocaleLowerCase() == "overcaste") {
            sunmoon2.setAttribute("src", "image/weather/116.png")
        } else if (conditionDay2.toLocaleLowerCase() == "patchy rain possible") {
            if (localtime < 12) {
                sunmoon2.setAttribute("src", "image/weather/partlyRainSun.png")
            } else {
                sunmoon2.setAttribute("src", "image/weather/partlyRainMoon.png")
            }
        }
        else if (conditionDay2.toLocaleLowerCase() == "clear") {
            if (localtime < 12) {
                sunmoon2.setAttribute("src", "image/weather/113.png")
            } else {
                sunmoon2.setAttribute("src", "image/weather/Moon.png")
            }
        }

        else if (conditionDay2.toLocaleLowerCase() == "moderate" || conditionDay2.toLocaleLowerCase() == "heavey rain with thunder") {
            sunmoon2.setAttribute("src", "image/weather/248.png")
        }
        else if (conditionDay2.toLocaleLowerCase() == "light drizzle") {
            sunmoon2.setAttribute("src", "image/weather/389.png")
        } else {
            sunmoon2.setAttribute("src", "image/weather/302.png")
        }
        maxtempDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.maxtemp_c + `<sup>o</sup>C`;
        minTempDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.mintemp_c + `<sup>o</sup>C`;
        valueConditionDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.condition.text;



        /**day 3 */

        conditionDay3 = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.condition.text;
        if (conditionDay3.toLocaleLowerCase() == "sunny") {
            sunmoon3.setAttribute("src", "image/weather/113.png")
        } else if (conditionDay3.toLocaleLowerCase() == "partly cloudy") {
            if (localtime < 12) {
                sunmoon3.setAttribute("src", "image/weather/partlyCloudysun.png")
            } else {
                sunmoon3.setAttribute("src", "image/weather/partlyCloudymoon.png")
            }
        }
        else if (conditionDay3.toLocaleLowerCase() == "overcaste") {
            sunmoon3.setAttribute("src", "image/weather/116.png")
        } else if (conditionDay3.toLocaleLowerCase() == "patchy rain possible") {
            if (localtime < 12) {
                sunmoon3.setAttribute("src", "image/weather/partlyRainSun.png")
            } else {
                sunmoon3.setAttribute("src", "image/weather/partlyRainMoon.png")
            }
        }
        else if (conditionDay3.toLocaleLowerCase() == "clear") {
            if (localtime < 12) {
                sunmoon3.setAttribute("src", "image/weather/113.png")
            } else {
                sunmoon3.setAttribute("src", "image/weather/Moon.png")
            }
        }

        else if (conditionDay3.toLocaleLowerCase() == "moderate" || conditionDay3.toLocaleLowerCase() == "heavey rain with thunder") {
            sunmoon3.setAttribute("src", "image/weather/248.png")
        }
        else if (conditionDay3.toLocaleLowerCase() == "light drizzle") {
            sunmoon3.setAttribute("src", "image/weather/389.png")
        } else {
            sunmoon3.setAttribute("src", "image/weather/302.png")
        }
        maxtempDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.maxtemp_c + `<sup>o</sup>C`;
        minTempDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.mintemp_c + `<sup>o</sup>C`;
        valueConditionDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.condition.text;

    }
})


/**page after search */

function search(term) {

    if (valdinpute() == true) {
        if (term.length >= 3) {
            x = term;
            myHttpRequest.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=61c6cbf289774e5d814230428210105&q=${x}&days=3`);
            myHttpRequest.send();
            myHttpRequest.addEventListener("readystatechange", function () {
                if (myHttpRequest.readyState == 4 && myHttpRequest.status == 200) {
                    // console.log(JSON.parse(myHttpRequest.response));
                    locationName.innerHTML = JSON.parse(myHttpRequest.response).location.name;
                    localtime = Number(JSON.parse(myHttpRequest.response).location.localtime.slice(11, 13));
                    temp1.innerHTML = JSON.parse(myHttpRequest.response).current.temp_c + `<sup>o</sup>C`;
                    if (localtime < 12) {
                        sunmoon1.setAttribute("src", "image/weather/113.png");
                    } else {
                        sunmoon1.setAttribute("src", "image/weather/moon.png");
                    }
                    currentDay1Condition.innerHTML = JSON.parse(myHttpRequest.response).current.condition.text;


                    /**day 2 */
                    conditionDay2 = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.condition.text;
                    if (conditionDay2.toLocaleLowerCase() == "sunny") {
                        sunmoon2.setAttribute("src", "image/weather/113.png")
                    } else if (conditionDay2.toLocaleLowerCase() == "partly cloudy") {
                        if (localtime < 12) {
                            sunmoon2.setAttribute("src", "image/weather/partlyCloudysun.png")
                        } else {
                            sunmoon2.setAttribute("src", "image/weather/partlyCloudymoon.png")
                        }
                    }
                    else if (conditionDay2.toLocaleLowerCase() == "overcaste") {
                        sunmoon2.setAttribute("src", "image/weather/116.png")
                    } else if (conditionDay2.toLocaleLowerCase() == "patchy rain possible") {
                        if (localtime < 12) {
                            sunmoon2.setAttribute("src", "image/weather/partlyRainSun.png")
                        } else {
                            sunmoon2.setAttribute("src", "image/weather/partlyRainMoon.png")
                        }
                    }
                    else if (conditionDay2.toLocaleLowerCase() == "clear") {
                        if (localtime < 12) {
                            sunmoon2.setAttribute("src", "image/weather/113.png")
                        } else {
                            sunmoon2.setAttribute("src", "image/weather/Moon.png")
                        }
                    }

                    else if (conditionDay2.toLocaleLowerCase() == "moderate" || conditionDay2.toLocaleLowerCase() == "heavey rain with thunder") {
                        sunmoon2.setAttribute("src", "image/weather/248.png")
                    }
                    else if (conditionDay2.toLocaleLowerCase() == "light drizzle") {
                        sunmoon2.setAttribute("src", "image/weather/389.png")
                    } else {
                        sunmoon2.setAttribute("src", "image/weather/302.png")
                    }
                    maxtempDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.maxtemp_c + `<sup>o</sup>C`;
                    minTempDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.mintemp_c + `<sup>o</sup>C`;
                    valueConditionDay2.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[1].day.condition.text;



                    /**day 3 */

                    conditionDay3 = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.condition.text;
                    if (conditionDay3.toLocaleLowerCase() == "sunny") {
                        sunmoon3.setAttribute("src", "image/weather/113.png")
                    } else if (conditionDay3.toLocaleLowerCase() == "partly cloudy") {
                        if (localtime < 12) {
                            sunmoon3.setAttribute("src", "image/weather/partlyCloudysun.png")
                        } else {
                            sunmoon3.setAttribute("src", "image/weather/partlyCloudymoon.png")
                        }
                    }
                    else if (conditionDay3.toLocaleLowerCase() == "overcaste") {
                        sunmoon3.setAttribute("src", "image/weather/116.png")
                    } else if (conditionDay3.toLocaleLowerCase() == "patchy rain possible") {
                        if (localtime < 12) {
                            sunmoon3.setAttribute("src", "image/weather/partlyRainSun.png")
                        } else {
                            sunmoon3.setAttribute("src", "image/weather/partlyRainMoon.png")
                        }
                    }
                    else if (conditionDay3.toLocaleLowerCase() == "clear") {
                        if (localtime < 12) {
                            sunmoon3.setAttribute("src", "image/weather/113.png")
                        } else {
                            sunmoon3.setAttribute("src", "image/weather/Moon.png")
                        }
                    }

                    else if (conditionDay3.toLocaleLowerCase() == "moderate" || conditionDay3.toLocaleLowerCase() == "heavey rain with thunder") {
                        sunmoon3.setAttribute("src", "image/weather/248.png")
                    }
                    else if (conditionDay3.toLocaleLowerCase() == "light drizzle") {
                        sunmoon3.setAttribute("src", "image/weather/389.png")
                    } else {
                        sunmoon3.setAttribute("src", "image/weather/302.png")
                    }
                    maxtempDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.maxtemp_c + `<sup>o</sup>C`;
                    minTempDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.mintemp_c + `<sup>o</sup>C`;
                    valueConditionDay3.innerHTML = JSON.parse(myHttpRequest.response).forecast.forecastday[2].day.condition.text;

                }
            })


            // console.log(x);
        }
    }

}

function valdinpute() {
    let regex = /^([A-Z])?[a-z]{0,}( [a-z]{0,})?$/;

    if (regex.test(inputSearch.value) == true) {
        alertValid.style.display = "none"
        return true;
    }
    else {
        alertValid.style.display = "block"
        return false;
    }

}