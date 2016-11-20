// (function(){


	var React = require("react");
	var ReactDOM = require("react-dom");
	
	var Header = React.createClass({
		getInitialState:function() {
			return {text:""}	
		},
		handleChange:function(event){
			this.setState({text:event.target.value});
		},
		handleSubmit : function(event){
			event.preventDefault();
			this.props.addTodo(this.state.text);
			this.setState({text:""});
		},
		render:function(){
			return <header className="header">
				<form onSubmit={this.handleSubmit}>
					<h1>todos</h1>
					<input className="new-todo" 
					placeholder="What needs to be done?" 
					onChange={this.handleChange} value={this.state.text}/>
				</form>
			</header>
		}
	});
	module.exports = Header;
// })()

	