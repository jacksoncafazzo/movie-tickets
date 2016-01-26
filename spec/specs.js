describe('Ticket', function () {
  it("creates a new ticket with the given properties", function () {
    var testTicket = new Ticket("Space Damon", "3:30", 16);
    expect(testTicket.name).to.equal("Space Damon");
    expect(testTicket.time).to.equal("3:30");
    expect(testTicket.requiredAge).to.equal(16);
  });
});
