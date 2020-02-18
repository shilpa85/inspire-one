import React from 'react';
import _ from 'lodash';

class QuizInput extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = {inputAnswer: ""};
		
	}

	onChangeHandler = (event) => {
		this.setState({inputAnswer: event.target.value});
	}
  
    onClickHandler = (item) => {
		this.setState({inputAnswer: item});
		this.props.callback(item);
		
	}
	
	renderDefault(){
		console.log(this.props.question.options);
			return this.props.question.options.map((item, index) =>
								{ return (
								<li 
								onClick={()=>this.onClickHandler(item) }
								className = {'quiz-container__options--' + this.props.question.type}>
									{(this.props.question.type === "multiple")?
									<span 
									className = {'quiz-container__options-head--' + this.props.question.type}>
									{String.fromCharCode(65+index)} 
									</span>:""
									}
									{item}
								</li>
								);
								
								});
	}
 
	render(){
		console.log(this.props.question.options);
		
		if (! this.props.question.options ){
			return <div>Loading...</div>;
		}
				
		return (
			<div>
			
			<div className = "quiz-container_input-wrapper">
				<h2 className="quiz-container__title">{this.props.question.title}</h2>
				<input 
					type ="text" 
					onChange={this.onChangeHandler} 
					onBlur = {() => this.props.callback(this.state.inputAnswer)} 
					value={this.state.inputAnswer}
					className="text-line" />
			</div>
				
			
			{this.props.mode === "default" && 
				<ul className="quiz-container__options--default"> 
				{this.renderDefault()}
				</ul>
			}
			
			
			</div>
		);


	}

}

export default QuizInput;

