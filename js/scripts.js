function Ticket (name, time, age) {
  this.name = name;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function () {
  if (this.time <= "4:00" && this.age < 60){
    return "$5";

  }
}
