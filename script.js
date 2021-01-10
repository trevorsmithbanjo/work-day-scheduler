$(document).ready(function () {
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var f = { month: "long", day: "2-digit" }
    var nine = $("#9am");
    var x = true;
    // Array of hours
    var hoursArr = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // Current date header
    $("#current-date").text(today.toLocaleString(f));



})