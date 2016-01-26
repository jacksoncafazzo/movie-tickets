function Ticket (name, time, age, quantity) {
  this.name = name;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

Ticket.prototype.price = function () {

  if (this.time <= "16:00"){
    var price = 5;
  } else if (this.time > "16:00" && this.age < 60) {
    var price = 10;
  } else if (this.time > "16:00" && this.age >= 60) {
    var price = 6;
  } else {
    alert("Please fill out all fields");
  }
  // var totalPrice = this.quantity * price
  return "$" + (this.quantity * price);
}

$(document).ready(function() {
  $("form#movies").submit(function (event) {
    event.preventDefault();
    var chosenMovie = $("select#movieName").val();
    var chosenMovieTime = $("input#movieTime").val();
    var chosenAge = $("input#userAge").val();
    var chosenQuantity = $("input#ticketQuantity").val();
    var newTicket = new Ticket(chosenMovie, chosenMovieTime, chosenAge, chosenQuantity);
    $(".movie-name").text(chosenMovie);
    $(".movie-time").text(chosenMovieTime);
    $(".movie-price").text(newTicket.price());


    $("select#movieName").val("");
    $("input#movieTime").val("");
    $("input#userAge").val("");
    $("input#ticketQuantity").val("");


  });
});
