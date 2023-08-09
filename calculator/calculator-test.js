
it('should calculate the monthly rate correctly', function () {

  values = {
    amount: 10000,
    years: 3,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual("286.43");
});


it("should return a result with 2 decimal places", function() {
  
  values = {
    amount: 10000,
    years: 2,
    rate: 2
  };
  expect(calculateMonthlyPayment(values)).toEqual("425.40");
});


