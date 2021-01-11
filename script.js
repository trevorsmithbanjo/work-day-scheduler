$(document).ready(function () {
    // luxon.js Date.Time variables
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var monthDay = { month: "long", day: "2-digit" }
    var hour = { hour: "numeric" };
    var currentHour = "";

    // Selectors
    var timeBlock = $(".time-block");
    var description = $(".description");

    // Array of 24 hour time
    var hours24 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

    // Current date header
    $("#currentDay").text(today.toLocaleString(monthDay));

    // function to remove letters & whitespace from currentHour
    function hrToNum() {
        currentHour = today.setLocale("de")
            .toLocaleString(hour)
            .replace(/\s\w+/g, "");
        // console.log("New Current Hour: " + currentHour);
        return currentHour;
    }

    // Set textarea background
    function setTextBackground() {
        hrToNum(currentHour);
        console.log(currentHour);
        for (var i = 0; i < 9; i++) {
            console.log(description[i].id);
            if (+description[i].id > +currentHour) {
                description.addClass("future").removeClass("past");
            } else if (+description[i].id === +currentHour) {
                description.addClass("present").removeClass("future");
            } else {
                description.addClass("past").removeClass("present");
            }
        }
    }
    setTextBackground();
})