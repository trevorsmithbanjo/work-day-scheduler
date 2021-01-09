$(document).ready(function () {
    var DateTime = luxon.DateTime;
    var today = DateTime.local();
    var f = { month: "long", day: "2-digit" }

    $("#current-date").text(today.toLocaleString(f));

})