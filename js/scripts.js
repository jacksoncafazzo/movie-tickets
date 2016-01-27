function Ticket (movie, time, age, quantity) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.quantity = quantity;
}

function MovieMaker (movieName, showTimes, movieRun) {
  this.movieName = movieName;
  this.showTimes = showTimes;
  this.movieRun = movieRun;
}

function ShowTimes (matinee, evening, late) {
  this.matinee = matinee;
  this.evening = evening;
  this.late = late;
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
      alert("Did you enter an age?");
    }
    return seniorDiscount;
}

function fillMovieObject (chosenMovie) {
  if (chosenMovie === "Space Damon") {
    var showTimes = new ShowTimes("3:30","5:45","8:00");
    var movie = new MovieMaker(chosenMovie, showTimes, 2);
  }
  return movie;
}


function createNewTicket () {
  var chosenMovie = $("select#movieName").val();

  // debugger;
  //   var movieRun = new MovieRun(chosenMovie, 2);
  //   } if else (chosenMovie = "Madagascar 7") {
  //     var movieRun = new MovieRun(chosenMovie, 1);
  //   } if else (chosenMovie = "Space Damon Returns") {
  //     var movieRun = new MovieRun(chosenMovie, 1);
  //   } else {
  //     alert("How did you get here?")
  //   }
  // var chosenMovie = movieRun;
  // var chosenMovieTime = $("input#movieTime").val();
  var chosenAge = $("input#userAge").val();
  var newTicket = new Ticket(chosenMovie, chosenMovieTime, chosenAge, +1);
  return newTicket;
}

$(document).ready(function() {
  $("body").data("ticketTotal", 0)
  $("body").data("movieGoers", 0)

  $("select#movieName").select(function(event) {
    var chosenMovie = $("select#movieName").val();
    var movie = fillMovieObject(chosenMovie);
    for (var index = 0; index < 2; index + 1) {
      $(".movieTimes").append("<li>" + movie.showTimes[index] + "</li>");
    }

  });

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
