exports.countWords = function(text, expectedWord) {
    var words = text.split(" ");

    var counter = 0;

    words.forEach(function(word){
      if (word === expectedWord) {
          counter++;
      }
    });

    return counter;
};
