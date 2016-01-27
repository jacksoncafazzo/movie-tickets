function Ticket (movieName, time, age, quantity) {
  this.movieName = movieName;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

Ticket.prototype.price = function () {
  if (this.time <= "16:00") {
    return 5;
  } else if (this.time > "16:00") {
    return 10;
  } else {
    alert("Please fill out all fields");
  }
  return;
}

Ticket.prototype.seniorDiscount = function (price) {
    var seniorDiscount = 0;
    if (this.age >= 60) {
      seniorDiscount = (price) * 0.2;
    } else if (this.age < 60) {

    } else {
      alert("oh no what's going on!?")
    }
    return seniorDiscount;
}

function createNewTicket () {
  var chosenMovie = $("select#movieName").val();
  var chosenMovieTime = $("input#movieTime").val();
  var chosenAge = $("input#userAge").val();
  var newTicket = new Ticket(chosenMovie, chosenMovieTime, chosenAge, +1);
  return newTicket;
}

$(document).ready(function() {
  $("body").data("ticketTotal", 0)
  $("body").data("movieGoers", 0)
  $("form#movies").submit(function(event) {

    var newTicket = createNewTicket();
    var ticketPrice = newTicket.price();
    ticketPrice = ticketPrice - newTicket.seniorDiscount(ticketPrice);
    var tempTotal = $("body").data("ticketTotal");
    tempTotal = ticketPrice + tempTotal;
    $("body").data("ticketTotal", tempTotal);
    var movieGoers = $("body").data("movieGoers") + 1;
    $("body").data("movieGoers", movieGoers)
    $(".movie-name").text(newTicket.movieName);
    $(".movie-time").text(newTicket.time);
    $(".ticketQuantity").text(movieGoers);
    $(".movie-price").text(tempTotal);
    $("#show-movie").fadeIn();
    $("input#userAge").val("");
    event.preventDefault();

  });

});
