import React from 'react';
import QuizList from './QuizList.js';

const data = [{
				"title" : "What should a sales plan always include?",
				"type": "double",
				"options": ["A practical goal", "Your picture with the team"],
				"correct" : "A practical goal",
				"score" : 1
			},
			{
				"title" : "To conduct successful sales activities you need",
				"type": "input",
				"options": ["A solid sales strategy" , "Best salesmen of the world" , "Music to inspire salesmen" ],
				"correct" : "A solid sales strategy",
				"score" : 5
			},
			{
				"title" : "Which of these do you need to achieve a target?",
				"type": "multiple",
				"options": ["A solid sales strategy" , "Managerial Support" , "HR Led Interventions" , "Team Orientation Exercise"  ],
				"correct" : "A solid sales strategy",
				"score" : 2
			},
			{
				"title" : "It is always okay to not be prepared for a meeting",
				"type": "truefalse",
				"options": ["True" , "False"],
				"correct" : "False",
				"score" : 1
			},
			{
				"title" : "Match the right options needed for a sales strategy",
				"type": "match",
				"options": ["well trained professionals", "countinous quality delivery", "cutomer centric empathy", "good chance of success", "sales training intervention", "customer happiness guarantee"],
				"correct" : "well trained professionals",
				"score" : 5
			}
			];

class App extends React.Component {

	render(){
	  return (
		<div className="App">
			<QuizList quizList = {data} />
		</div>
	  );
	}
}

export default App;
