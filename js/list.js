// (function(){

		var React = require("react");
	var ReactDOM = require("react-dom");
	var List = React.createClass({
		handleClick : function(index,event){
			this.props.removeTodo(index);
		},
		handleChange : function(index,event){
			console.log(event.target.checked);
			this.props.toggleTodo(index,event.target.checked);
		},
		render:function(){
			var todos = this.props.todos;
			var lis = [];
			for (var i in todos) {
				//completed
				var todo = todos[i];
				var isCompleted = todo.complete ? "completed":"";
				lis.push(<li className={isCompleted} key={i}>
						<div className="view">
							<input className="toggle" type="checkbox" onChange={this.handleChange.bind(this,i)} checked={todo.complete}/>
							<label>{todo.name}</label>
							<button className="destroy" onClick={this.handleClick.bind(this,i)}></button>
						</div>
						<input className="edit" defaultValue="Create a TodoMVC template" />
					</li>)
			}
			return <section className="main">
				<input className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul className="todo-list">
					{lis}
				</ul>
			</section>
		}
	});

module.exports = List;
	// window.List = List;

// })()