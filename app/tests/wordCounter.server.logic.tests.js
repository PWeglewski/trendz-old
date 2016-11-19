var should = require('should');
var wordCounter = require('../logic/wordCounter.server.logic');

describe('Word counting logic tests', function() {
    it('Should count words in given text', function(done) {
        var text = 'Ala ma kota';
        var word = 'Ala';

        var result = wordCounter.countWords(text, word);

        should(result).be.equal(1);
        done();
    });
});
