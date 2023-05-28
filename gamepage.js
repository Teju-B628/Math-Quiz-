var player1name = localStorage.getItem ("player1name");
    player2name = localStorage.getItem ("player2name");

var player1score = 0;
    player2score = 0;
    document.getElementById("player1name").innerHTML = player1name + ":" ; 
    document.getElementById("player2name").innerHTML = player2name + ":" ;
    document.getElementById("player1score").innerHTML = player1score + ":" ;
    document.getElementById("player2score").innerHTML = player2score + ":" ;
    document.getElementById("questionTurn").innerHTML = "Question Turn: " + player1name;
    document.getElementById("answerTurn").innerHTML = "Answer Turn: " + player2name;

    function send(){
        var Number1 = document.getElementById("number1").value;
        var Number2 = document.getElementById("number2").value;
         Answer = Number1 * Number2;

        Question = "<h2>" + Number1 + "x" + Number2 + "</h2>";
        Textbox = "answer - <input id='answerbox'>";
        Check = "<button class='btn btn-info'onclick='check()'> check </button>";
        Connect = Question + Textbox + Check;
        document.getElementById("q&a").innerHTML = Connect;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    }
QuestionTurn = "player1";
AnswerTurn = "player2";
    function check(){
    getAnswer = document.getElementById("answerbox").value;
    if (getAnswer == Answer){
        if(AnswerTurn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if(QuestionTurn == "player1"){
        QuestionTurn = "player2"
        document.getElementById("questionTurn").innerHTML = "Question Turn - " + player2name;
    }
    else {
        QuestionTurn = "player1"
        document.getElementById("questionTurn").innerHTML = "Question Turn - " + player1name;
    }
    if(AnswerTurn == "player1"){
        AnswerTurn = "player2"
        document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player2name;
    }
    else {
        AnswerTurn = "player1"
        document.getElementById("answerTurn").innerHTML = "Answer Turn - " + player1name;
    }
}
