describe("AuditManager", function() {
  var auditManager;

  beforeEach(function() {
    auditManager = new AuditManager();
  });

  it("should be able to log", function() {
    let message = "test message";

    spyOn(console, "log");
    auditManager.log(message);
    expect(console.log).toHaveBeenCalledWith(message);
  });
});
  