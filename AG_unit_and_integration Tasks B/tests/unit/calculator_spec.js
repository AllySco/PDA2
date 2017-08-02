var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 5', function(){
     calculator.add(5);
     assert.equal(calculator.runningTotal, 5);
   });

   it('can add 500', function(){
     calculator.add(500);
     assert.equal(calculator.runningTotal, 500);
   });

   it('can add decimals', function(){
     calculator.add(1.765);
     assert.equal(calculator.runningTotal, 1.765);
   });

   it('can subtract 9', function() {
     calculator.subtract(9);
     assert.equal(calculator.runningTotal, -9);
   });

   it('can subtract 342', function(){
     calculator.subtract(342);
     assert.equal(calculator.runningTotal, -342);
   });

   it('can multiply by 2', function() {
     calculator.previousTotal = 4;
     calculator.multiply(2);
     assert.equal(calculator.runningTotal, 8);
   });

   it('can multiply by 120', function() {
     calculator.previousTotal = 3;
     calculator.multiply(120);
     assert.equal(calculator.runningTotal, 360);
   });

   it('can multiply by -1', function() {
     calculator.previousTotal = 3;
     calculator.multiply(-1);
     assert.equal(calculator.runningTotal, -3);
   });

   it('can divide by a number', function() {
     calculator.previousTotal = 20;
     calculator.divide(2);
     assert.equal(calculator.runningTotal, 10);
   });

   it('can divide by 25', function() {
     calculator.previousTotal = 400;
     calculator.divide(25);
     assert.equal(calculator.runningTotal, 16);
   });

   it('can take a number click', function() {
     calculator.numberClick(2);
     assert.equal(calculator.runningTotal, 2);
   });

   it('can take number clicks', function() {
     calculator.numberClick(2);
     calculator.numberClick(7);
     calculator.numberClick(1);
     assert.equal(calculator.runningTotal, 271);
   });
   
   it('can clear screen', function() {
     calculator.numberClick(20);
     calculator.clearClick();
     assert.equal(calculator.runningTotal, 0);
   });

   it('can do a calculation and then clear', function() {
     calculator.numberClick(5);
     calculator.operatorClick('+');
     calculator.numberClick(5);
     calculator.operatorClick('=');
     calculator.clearClick();
     assert.equal(calculator.previousTotal, 10);
     calculator.clearClick();
     assert.equal(calculator.previousTotal, null);
   });

   it('can clear halfway through operation', function() {
     calculator.numberClick(6);
     calculator.operatorClick('*');
     calculator.numberClick(2);
     calculator.numberClick(1);
     calculator.clearClick();
     calculator.numberClick(20);
     calculator.operatorClick('=');
     assert.equal(calculator.previousTotal, 120);
   });

   it('can take operator click', function() {
     calculator.runningTotal = 1;
     calculator.operatorClick('+');
     assert.equal(calculator.previousTotal, 1);
   });

   it('can take operator clicks', function() {
     calculator.numberClick(4);
     calculator.operatorClick('*');
     calculator.numberClick(4);
     calculator.operatorClick('+');
     calculator.numberClick(2);
     calculator.operatorClick('=');
     assert.equal(calculator.previousTotal, 18);
   });


});
