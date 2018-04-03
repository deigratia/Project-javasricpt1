var sentenceA = "hello goodness";

 sentenceA = sentenceA.split(' ');

 for (var i = 0; i < sentenceA.length; i++) {
    sentenceA[i] = sentenceA[i].charAt(0).toUpperCase() + sentenceA[i].slice(1);
}
 sentenceA=sentenceA.join(' ');
console.log(sentenceA);
