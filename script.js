$(document).ready(function () {
    // luxon.js Date.Time variables
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var monthDay = { month: "long", day: "2-digit" }
    var hour = { hour: "numeric" };
    var currentHour = "";

    // Selectors
    var text = "";
    var description = $(".description");

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
        currentHour = parseInt(hrToNum());
        for (var i = 0; i < 9; i++) {
            var hour = parseInt($(description[i]).attr("id"))
            if (hour > currentHour) {
                $(description[i]).addClass("future").removeClass("past");
            } else if (hour === currentHour) {
                $(description[i]).addClass("present").removeClass("future");
            } else {
                $(description[i]).addClass("past").removeClass("present");
            }
        }

    }

    // Click Event listener
    $(".saveBtn").on("click", function () {
        text = $(description).val().trim();
        // console.log(text);
        // hourStored = this.id;
        // console.log(hourStored);
        localStorage.setItem(this.id, text);
    })

    // Set Textarea Colors by Time of Day
    setTextBackground();
})