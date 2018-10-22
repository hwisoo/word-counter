$(document).ready(function() {
  $("button").click(function(){
    var str = $("#wordInput").val();
    arrayOfWords = str.split(" ");
    var wordCounts = {};
      
    for (i = 0; i < arrayOfWords.length; i++) {
      var word = arrayOfWords[i];
        if (!wordCounts[word]) {
        wordCounts[word] = 1;
        } else {
        wordCounts[word]++;
        }  
      } 

      var newStr = JSON.stringify(wordCounts);
      $("#output").append("<li>" + newStr + "</li>");
    });

});
