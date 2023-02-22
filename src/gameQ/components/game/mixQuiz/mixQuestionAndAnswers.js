export function shuffle(Quiz) {
    for (var i = 0; i < Quiz.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (Quiz.length - i));
        var temp = Quiz[j];
        Quiz[j] = Quiz[i];
        Quiz[i] = temp;
    }
    return Quiz;
}