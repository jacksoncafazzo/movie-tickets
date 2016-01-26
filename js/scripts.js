function Ticket (name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function () {
  if (this.time <= "4:00"){
    return "$5";
  } else if (this.time > "4:00" && this.age < 60) {
    return "$10";
  } else if (this.time > "4:00" && this.age >= 60) {
    return "$6";
  } else {
    alert("Please fill out all fields");
  }
}
