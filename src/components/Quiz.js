import React from 'react';

class Quiz extends React.Component {
	
	constructor(props){
		super(props);
	
	}
	
	renderDefault(){
		console.log(this.props.question.options);
			return this.props.question.options.map((item, index) =>
								{ return (
								<li onClick={()=>this.props.callback(item)} className = {'quiz-container__options--' + this.props.question.type}>
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
		
		
		if (! this.props.question.options ){
			return <div>Loading...</div>;
		}
		
		return (
			<div>
			
			<h2 className="quiz-container__title">{this.props.question.title}</h2>
			
			<ul className="quiz-container__options--default"> 
			{this.props.mode === "default" && this.renderDefault()}
			{this.props.mode === "right" && 
				<li className = {'quiz-container__options--' + this.props.question.type + '-' + this.props.mode}>
					{this.props.userInput}
				</li>
			}
			{this.props.mode === "wrong" && 
				<li className = {'quiz-container__options--' + this.props.question.type + '-' + this.props.mode} >
					{this.props.userInput}
				</li>
			}
			</ul>
			
			</div>
		);


	}

}

export default Quiz;

