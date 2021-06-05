class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    question.hide();

    background("Lightyellow")
    textSize(35)
    text("Result of the QUIZ", 340, 50)
    text("------------------", 320, 65)
    
    getContestantInfo();

    
      if(allContestants !== undefined){
          fill("yellow")
          textSize(20)
          text("NOTE: Contestant who answered correctly will be highlighted in GREEN colour, 130, 230")
    }
    

      for(var plr in allContestants){
          var correctAns = "2"
          if(correctAns===allContestants[plr].answer)
              fill("Green")
      else
          fill("Red")
    }
    }

    }
