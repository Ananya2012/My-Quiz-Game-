class Quiz{
    constructor(){}
    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data ){
            gameState = data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    play(){
        question.hide()
        background("pink");
        fill("black");
        textSize(4);
        text("Result Of The Quiz",340,50);
        Contestant.getPlayerInfo()
        if(allContestants !== undefined){
            var displayAnswers = 230;
            fill("Blue");
            text("20");
            text("NOTE :CONTESTANT WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN COLOUR!",130,230);
            for(var plr in allContestants){
                debugger;
                var correctAns = "2"
                if(correctAns === allContestants[plr].answer)
                fill("green")
                else
                fill("red");
                displayAnswers+=30
                textSize(20)
                text(allContestants[plr].name+ ": " + allContestants[plr].answer, 250,displayAnswers)
            }
        }
    }

   
}