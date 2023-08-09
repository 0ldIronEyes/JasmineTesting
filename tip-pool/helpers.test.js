describe("helpers function test", function() {
    beforeEach( function()
    {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should return the total tip payment  in sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipAmt")).toEqual(40);
    });

    it('should return the total bill payment in sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("billAmt")).toEqual(200);
    });

    it('should return the total tip percent in sumPaymentTotal()', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal("tipPercent")).toEqual(40);
    });

    it('should calculate tip percentage correctly in calculateTipPercentage()', function () {
        expect( calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(211, 21)).toEqual(10);
    });

    afterEach( function()
    {
          billAmtInput.value = '';
          tipAmtInput.value = '';
          paymentTbody.innerHTML = '';
          summaryTds[0].innerHTML = '';
          summaryTds[1].innerHTML = '';
          summaryTds[2].innerHTML = '';
          serverTbody.innerHTML = '';
          allPayments = {};
          paymentId = 0;
    });
});