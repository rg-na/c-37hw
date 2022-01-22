class Question 
{
  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.option5 = createElement('h4');
    //var rn=0;
    var correctAns =0;
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 0);
    

    //rn = randomNumber(1,2);
    var max = 6;
    var min = 1;
    

    var rn = Math.floor(Math.random() * (max - min) + min);

    if (rn == 1){
      

      this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      this.question.position(150, 80);
      this.option1.html("1: Everyone");
      this.option1.position(150, 100);
      this.option2.html("2: Envelope");
      this.option2.position(150, 120);
      this.option3.html("3: Estimate");
      this.option3.position(150, 140);
      this.option4.html("4: Example");
      this.option4.position(150, 160);
      this.option5.html("5: Enter");
      this.option5.position(150, 180);
      this.correctAns = 2;
    
    }
   else if (rn == 2) {
    this.question.html("Question:- I’m tall when I’m young, and I’m short when I’m old. What am I?" );
    this.question.position(150, 80);
    this.option1.html("1: Humans");
    this.option1.position(150, 100);
    this.option2.html("2: Animals");
    this.option2.position(150, 120);
    this.option3.html("3: Orange");
    this.option3.position(150, 140);
    this.option4.html("4: Candle");
    this.option4.position(150, 160);
    this.option5.html("5: Tree");
    this.option5.position(150, 180)
    this.correctAns = 4;
  } 
  else if (rn == 3) {
    this.question.html("Question:- What gets bigger when more is taken away?" );
    this.question.position(150, 80);
    this.option1.html("1: legos");
    this.option1.position(150, 100);
    this.option2.html("2: building");
    this.option2.position(150, 120);
    this.option3.html("3: hole");
    this.option3.position(150, 140);
    this.option4.html("4: pie");
    this.option4.position(150, 160);
    this.option5.html("5: pears");
    this.option5.position(150, 180)
    this.correctAns = 3;
  }
   
  else if (rn == 4) {
    this.question.html("Question:- I’m found in socks, scarves and mittens; and often in the paws of playful kittens. What am I?" );
    this.question.position(150, 80);
    this.option1.html("1: plastic");
    this.option1.position(150, 100);
    this.option2.html("2: dirt");
    this.option2.position(150, 120);
    this.option3.html("3: water");
    this.option3.position(150, 140);
    this.option4.html("4: light");
    this.option4.position(150, 160);
    this.option5.html("5: yarn");
    this.option5.position(150, 180)
    this.correctAns = 5;
  }

  else if (rn == 5) {
    this.question.html("Question:- If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?" );
    this.question.position(150, 80);
    this.option1.html("1: toys");
    this.option1.position(150, 100);
    this.option2.html("2: secret");
    this.option2.position(150, 120);
    this.option3.html("3: water");
    this.option3.position(150, 140);
    this.option4.html("4: shelter");
    this.option4.position(150, 160);
    this.option5.html("5: food");
    this.option5.position(150, 180)
    this.correctAns = 2;
  }
  
  this.input1.position(150, 230);
  this.input2.position(350, 230);
  this.button.position(290, 300);
  this.button2.position(360, 300);

  this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
  });

  this.button2.mousePressed(()=>{
    contestant.updateCount(0)
    quiz.update(0)
    var ref = database.ref("contestants")
    ref.remove()
  })

  }
}