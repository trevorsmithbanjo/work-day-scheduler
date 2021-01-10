$(document).ready(function () {
    // luxon.js Date.Time variables
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var monthDay = { month: "long", day: "2-digit" }
    var hour = { hour: "numeric" };
    var currentHour = today.setLocale("de").toLocaleString(hour);

    // Main container div
    var container = $(".container");
    console.log(today.setLocale("de").toLocaleString(hour));

    // Array of hours
    var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // Array of 24 hour time
    var hours24 = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

    // Current date header
    $("#current-date").text(today.toLocaleString(monthDay));

    // For loop to populate entry rows
    for (i = 0; i <= 8; i++) {
        var entryRow = $(`<div class="row mb-2">
        <hr>
        <div class="col-3 text-end p-0">
            <h2>${hours[i]}</h2>
        </div>
        <div class="col-6">
            <textarea class="bg-secondary form-contorl" id="${hours24[i]}" rows="4" style="width:100%"></textarea>
        </div>
        <div class="col-3 d-grid gap-2 p-0">
            <button class="btn bg-info text-center" id="${hours[i]}">Save</button>
        </div>
    </div>`);
        container.append(entryRow);
    }

    // function to remove letters & whitespace from currentHour
    function hrToNum(currentHour) {
        currentHour = currentHour.replace(/\s\w+/g, "");
        console.log("New Current Hour: " + currentHour);
        return currentHour;
    }

})