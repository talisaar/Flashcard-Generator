var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");



var one = new BasicCard ("What color is the moon", "White");
var two = new BasicCard ("What color is the dark side of the moon", "black");
var three = new ClozeCard ("We will we will rock you", "rock");
var four = new ClozeCard ("A dog is a mans best friend", "dog");

var questions_array = [one, two, three, four];

var counter = 0;
var correct_answer;
var user_answer;


var nextQuestion = function () {

correct_answer = questions_array[counter].back.toLowerCase();

	inquirer.prompt([ 

      {
        name: "question",
        message: questions_array[counter].front
      }
    ]).then(function(answers) {

    	// console.log("kaka " + answers.question);
    	// console.log("kaka " + questions_array[counter].back);

    	user_answer = answers.question.toLowerCase();
    	if (user_answer === correct_answer){

    		    	console.log("correct!");
    		    	counter++;
    		    	console.log(counter);
    				nextQuestion();

    	}

    	else {
    		console.log("wrong!");
    		counter++;
    		nextQuestion();
    	}
    });


}

nextQuestion();




