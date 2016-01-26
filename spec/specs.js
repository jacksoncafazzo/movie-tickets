describe('Ticket', function () {
  it("creates a new ticket with the given properties", function () {
    var testTicket = new Ticket("Space Damon", "3:30", 16);
    expect(testTicket.name).to.equal("Space Damon");
    expect(testTicket.time).to.equal("3:30");
    expect(testTicket.age).to.equal(16);
  });

  it("creates a discounted price based on time", function () {
    var testTicket = new Ticket("Space Damon", "3:30", 16)
    expect(testTicket.price()).to.equal("$5");
  });



  it("displays ticketInfo method by concatenation", function () {
    var testTicket = new Ticket("Space Damon", "3:30", 16);
    expect(testTicket.ticketInfo()).to.equal("You're going to see Space Damon at 3:30");
  });
});
