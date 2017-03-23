var assert = require('assert');
var sum = require('./sum');

describe('Math in JS', function () {
    it('should support addition', function (done) {
        setTimeout(function() {
            assert.equal(sum(1 , 1), 2);
            done(); // dla testow asynchronicznych - patrz tez argument funkcji
        }, 100);
    });
});