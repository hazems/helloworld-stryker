class RentPriceClassifier {
  constructor(auditManager) {
    this.auditManager = auditManager;
  }

  classify(price) {
    this.auditManager.log("price = " + price);
  
    if (price < 1500) {
      return "low";
    } else if (price < 2000) {
      return "average";
    } else if (price < 3000) {
      return "expensive";
    } else {
      return "very expensive";
    }
  };
}