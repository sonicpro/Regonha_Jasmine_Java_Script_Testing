function Investment (param) {
  this.stock = param.stock;
  this.shares = param.shares;
  this.sharePrice = param.sharePrice;
  this.cost = this.shares * this.sharePrice;
};