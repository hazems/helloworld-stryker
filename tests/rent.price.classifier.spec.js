describe("RentPriceClassifier", function() {
  var rentPriceClassifier;
  var auditManager;

  beforeEach(function() {
      auditManager = new AuditManager();
      rentPriceClassifier = new RentPriceClassifier(auditManager);
  });

  it("should be able to classify low price", function() {
    expect(rentPriceClassifier.classify(1000)).toEqual("low");
  });

  it("should be able to classify average price", function() {
    expect(rentPriceClassifier.classify(1700)).toEqual("average");
  });

  it("should be able to classify expensive price", function() {
    expect(rentPriceClassifier.classify(2900)).toEqual("expensive");
  });

  it("should be able to classify very expensive price", function() {
    expect(rentPriceClassifier.classify(5000)).toEqual("very expensive");
  });

  /* Boundary conditions ... */
  it("should be able to classify minimum average price", function() {
    expect(rentPriceClassifier.classify(1500)).toEqual("average");
  });

  it("should be able to classify minimum expensive price", function() {
    expect(rentPriceClassifier.classify(2000)).toEqual("expensive");
  });

  it("should be able to classify minimum very expensive price", function() {
    expect(rentPriceClassifier.classify(3000)).toEqual("very expensive");
  });

  it("classification should always call audit manager's log", function() {
    var price = 3000;
    spyOn(auditManager, "log");
    rentPriceClassifier.classify(price);
    expect(auditManager.log).toHaveBeenCalledWith("price = " + price);
  });
});
