describe('Ticket', function () {
  it("creates a new ticket with the given properties", function () {
    var testTicket = new Ticket("Space Damon", "15:30", 16);
    expect(testTicket.name).to.equal("Space Damon");
    expect(testTicket.time).to.equal("15:30");
    expect(testTicket.age).to.equal(16);
  });

  it("creates a discounted price for matinee", function () {
    var testTicket = new Ticket("Space Damon", "15:30", 16)
    expect(testTicket.price()).to.equal("$5");
  });

  it("creates a regular price for evening shows", function () {
    var testTicket = new Ticket("Space Damon", "16:30", 16)
    expect(testTicket.price()).to.equal("$10");
  });

  it("creates a discount price based on age if not a matinee", function () {
    var testTicket = new Ticket("Space Damon", "16:30", 65)
    expect(testTicket.price()).to.equal("$6");
  });

});
