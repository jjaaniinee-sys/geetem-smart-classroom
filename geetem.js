function reserveClassroom() {

    let room = document.getElementById("room").value;

    let date = document.getElementById("date").value;

    let time = document.getElementById("time").value;


    if (date === "" || time === "") {

        alert("Please select a date and time.");

        return;

    }


    localStorage.setItem("room", room);

    localStorage.setItem("date", date);

    localStorage.setItem("time", time);


    alert("Reservation successful!");


    displayReservation();

}


function displayReservation() {

    let display =
        document.getElementById("reservationDisplay");


    if (display === null) {

        return;

    }


    let room =
        localStorage.getItem("room");

    let date =
        localStorage.getItem("date");

    let time =
        localStorage.getItem("time");


    if (room === null) {

        display.innerHTML =
            "<p>No reservations yet.</p>";

        return;

    }


    display.innerHTML =

        "<div class='reservation-card'>" +

        "<h3>Room " + room + "</h3>" +

        "<p><strong>Date:</strong> " +
        date +
        "</p>" +

        "<p><strong>Time:</strong> " +
        time +
        "</p>" +

        "<span class='reserved'>" +
        "Reserved" +
        "</span>" +

        "</div>";

}


displayReservation();