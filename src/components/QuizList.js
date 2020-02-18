import React from 'react';
import Quiz from './Quiz.js';
import QuizInput from './QuizInput.js';

class QuizList extends React.Component {

	constructor(props){
		super(props);
		
		this.state = {
						quiz:{}, 
						current:0, 
						totalScore: 0, 
						mode: "default", 
						userInput: null, 
						answerButton: false 
					 };
		
	}
	
	componentDidMount(){
		this.setState({quiz : this.props.quizList[this.state.current]});
	}
	
	quizHandler = () => {
		this.setState({mode: "default"});
		if(this.state.current < this.props.quizList.length) {
			if (this.state.quiz.correct === this.state.userInput){
				this.setState({totalScore : this.state.totalScore + this.state.quiz.score})
			}
			this.setState({current : this.state.current + 1, quiz : this.props.quizList[this.state.current +1], answerButton: false});	
		}
		
	}
	
	checkAnswer = (input) => {
		this.setState({userInput: input, answerButton: true});
		
	}
	
	showCorrectAnswer = () => {
		if (this.state.quiz.correct === this.state.userInput){
				this.setState({mode: "right", answerButton: false});
			} else {
				this.setState({mode: "wrong", answerButton: false});
			}
		
	}
		
	
	render(){
		var quizComponent;

		
		if(this.state.current < this.props.quizList.length){
			var componentType;
			if(this.state.quiz.type === "input" ){
				componentType = <QuizInput 
										question = {this.state.quiz} 
										mode={this.state.mode} 
										userInput={this.state.userInput} 
										callback = {this.checkAnswer} 
								/>;
			} else {
				componentType = <Quiz 
									question = {this.state.quiz} 
									mode={this.state.mode} 
									callback = {this.checkAnswer}
									userInput={this.state.userInput} 
									/>;
			}
			
		 quizComponent =   <>
							{componentType}
							<div className="quiz-container--buttons">
							<button onClick = {this.quizHandler} className = "quiz-container__button--next"> Next </button>
							{(this.state.answerButton) && 
							<button onClick = {this.showCorrectAnswer} className = "quiz-container__button--answer"> Show Answer </button>}
							</div>
						   </>;
							
		} else {
			quizComponent = <div className = "quiz-container__score">You scored: {this.state.totalScore} </div>;
		}
		
		var containerClass;
				
		if(this.state.quiz && this.state.mode === "default"){
			containerClass = "quiz-container--"+this.state.quiz.type
		} else {
			containerClass = "quiz-container--"+this.state.mode
		}
		
		
 		return (
				<div className = {'quiz-container-main ' + containerClass}>
					<div className = "quiz-container__question">
						{quizComponent}
						
					</div>
				</div>);

	}

}
export default QuizList;

