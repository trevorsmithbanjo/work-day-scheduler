$(document).ready(function () {
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var f = { month: "long", day: "2-digit" }
    var nine = $("#9am");
    var x = true;

    $("#current-date").text(today.toLocaleString(f));

})