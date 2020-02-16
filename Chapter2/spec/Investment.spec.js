describe('investment', function () {
    let investment;
    const shares = 100;
    const sharePrice = 20;
    const stock = new Stock();

    beforeEach(function () {
        investment = new Investment({
            stock,
            shares,
            sharePrice
        });
    })

    it('should be of a stock', function () {
        expect(investment.stock).toBe(stock);
    });

    it('should have the invested shares\' quantity', function () {
        expect(investment.shares).toEqual(shares);
    });

    it('should have the share paid price', function () {
        expect(investment.sharePrice).toEqual(sharePrice)
    });

    it('should have a cost', function () {
        expect(investment.cost).toEqual(shares * sharePrice);
    });
});