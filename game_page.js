function check(){
    question_turn="player1"
    answer_turn="player2"
    
    get_answer=document.getElementById("input_check_box").value 
    answer=get_answer.toLowerCase()
    console.log("Answer in lowercase-" + answer);
 
    if(answer==word){
        if(answer_turn=="player1"){
            player1_score += 1
            document.getElementById("player1_score").innerHTML=player1_score
        }
    else{
        player2_score += 1
        document.getElementById("player2_score").innerHTML=player2_score
    }
    }
    if(question_turn=="player1"){
question_turn="player2"
document.getElementById("player_question").innerHTML="question turn -" + player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn -" + player1_name;
    }
    if(answer_turn=="player_1"){
    answer_turn="player_2"
    document.getElementById("player_answer").innerHTML="answer turn-" + player2_name;
    }
    else{
        answer_turn="player_1"
    document.getElementById("player_answer").innerHTML="answer turn-" + player1_name;
    }
    document.getElementById("output").innerHTML=""
};