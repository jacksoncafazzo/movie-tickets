var movieGoers = 1;

function Ticket (name, time, age, quantity) {
  this.name = name;
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

  $("form#movies").submit(function(event) {
    var newTicket = createNewTicket();
    var ticketPrice = newTicket.price();
    ticketPrice = ticketPrice - newTicket.seniorDiscount(ticketPrice);
      // ticketPrice = $("#movie-price").val();
    console.log(ticketPrice);
    debugger;
    var tempTotal = $("body").data("ticketTotal");
    tempTotal = tempTotal + ticketPrice;
    console.log(tempTotal);
    $("body").data("ticketTotal", tempTotal);
    movieGoers =+ 1;
    $(".ticketQuantity").text(movieGoers);
    $(".movie-price").text(tempTotal);
    $("#show-movie").fadeIn();
    $("input#userAge").val("");
    event.preventDefault();

  });
  // $("form#movies").submit(function(event) {
  //   event.preventDefault();
  //   var chosenMovie = $("select#movieName").val();
  //   var chosenMovieTime = $("input#movieTime").val();
  //   var chosenAge = $("input#userAge").val();
  //   var chosenQuantity = $("input#ticketQuantity").val();
  //   var newTicket = new Ticket(chosenMovie, chosenMovieTime, chosenAge, chosenQuantity);
  //   // if (chosenQuantity > 1) {
  //   //   $(".ticketQuantity").text(chosenQuantity + " tickets.");
  //   // } else if (chosenQuantity === 1) {
  //   //
  //   // } else {
  //   //   alert("Bad values")
  //   // }
  //
  //   $(".movie-name").text(chosenMovie);
  //   $(".movie-time").text(chosenMovieTime);
  //   $(".movie-price").text(newTicket.price());
  //   $("#show-movie").fadeIn();
  //
  //   $("select#movieName").val("");
  //   $("input#movieTime").val("");
  //   $("input#ticketQuantity").val("");
  // });
  //

});
