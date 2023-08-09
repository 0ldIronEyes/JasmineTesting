describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it('should return a new payment object on createCurPayment()', function () {
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
    
        expect(createCurPayment()).toEqual(expectedPayment);
      });



    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
});