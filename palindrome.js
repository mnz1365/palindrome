
var word = "kayak";
var reverse_word = "";
var second_word = "";
var word_result = false;
 console.log(typeof(reverse_word));
second_word = word.split("");

for(var i=0;i<second_word.length;i++){
    reverse_word += second_word[(second_word.length-1)-i];
}


if(reverse_word == word){
    word_result = true;
    
    
    console.log("the word is palindrome");

}


if(word_result == false){
     
     console.log("the word is not palindrome!");
}