function Ticket (name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function () {
  if (this.time <= "16:00"){
    return "$5";
  } else if (this.time > "16:00" && this.age < 60) {
    return "$10";
  } else if (this.time > "16:00" && this.age >= 60) {
    return "$6";
  } else {
    alert("Please fill out all fields");
  }
}

$(document).ready(function() {
  $("form#movies").submit(function (event) {
    event.preventDefault();
    var chosenMovie = $("select#movieName").val();
    var chosenMovieTime = $("input#movieTime").val();
    var chosenAge = $("input#userAge").val();
    var newTicket = new Ticket(chosenMovie, chosenMovieTime, chosenAge);
    $(".movie-name").text(chosenMovie);
    $(".movie-time").text(chosenMovieTime);
    $(".movie-price").text(newTicket.price());

    $("select#movieName").val("");
    $("input#movieTime").val("");
    $("input#userAge").val("");

  });
});
