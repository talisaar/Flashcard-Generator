// NEED TO UNIFY THE FUNCTIONS FOR PLAYING A REGULAR CARD
// AND A CLOZE CARD. ALSO NEED TO ADD THING TO SEE IF OUT
// OF QUESTIONS AND NOT RUN NEXT QUESTION OR CLOZE


var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require("inquirer");



var one = new BasicCard ("What color is the moon", "White");
var two = new BasicCard ("What color is the dark side of the moon", "black");
var three = new ClozeCard ("We will we will rock you", "rock");
var four = new ClozeCard ("A dog is a mans best friend", "dog");

var questions_array = [one, two, three, four];

var Basic_cards_array = [one, two]; // temporary for fun
var ClozeCard_array = [three, four]; // temporary for fun


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


// var nextCloze = function () {


// 	correct_answer = ClozeCard_array[counter].cloze.toLowerCase();

// 		inquirer.prompt([ 

//       {
//         name: "clozequestion",
//         message: "Complete the sentence: "+ClozeCard_array[counter].partial
//       }
//     ]).then(function(answers) {

//     	user_answer = answers.clozequestion.toLowerCase();

//     	if (user_answer === correct_answer){

//     		    	console.log("correct!");
//     		    	counter++;
//     		    	console.log(counter);
//     				nextCloze();

//     	}

//     	else {
//     		console.log("wrong!");
//     		counter++;
//     		nextCloze();
//     	}



// });

// };
nextQuestion();

// nextCloze();



