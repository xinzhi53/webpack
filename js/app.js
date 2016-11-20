(function (window) {
	'use strict';

	// ReactDOM.render(<h1>11111</h1>,document.body);
	var React = require("react");
	var ReactDOM = require("react-dom");

	var Header = require("./header.js");
	var List = require("./list.js");
	var Footer = require("./footer.js");

	var App = React.createClass({
		removeTodo:function(index){
			var todos = this.state.todos;
			todos.splice(index,1);
			this.setState({todos:todos});
		},
		addTodo:function(text){
			if (!text) {
				return;
			}
			var todos = this.state.todos;
			todos.push({name:text,complete:false});
			this.setState({todos:todos});
		},
		handleToggle: function(index,status){
			var todos = this.state.todos;
			var todo = todos[index];
			todo.complete = status;
			this.setState({todos:todos});
		},
		getInitialState:function() {
			var arr = [{name:"学习",complete:true},{name:"打CF",complete:false},{name:"打豆豆",complete:true},]
			return {todos : arr}
		},
		render:function(){
			var left = 0;
			/*
			for (var i in this.state.todos) {
				var todo = this.state.todos[i];
				if (!todo.complete) {
					left ++;
				}
			}
			*/
			this.state.todos.forEach(function(ele,index){
				if (ele.complete == false) {
					left ++;
				}
			})
			return <div>
				<Header addTodo={this.addTodo}></Header>
				<List todos={this.state.todos} removeTodo={this.removeTodo}
				toggleTodo={this.handleToggle}></List>
				<Footer leftTodos={left}></Footer>
			</div>
		}
	})

	ReactDOM.render(<App></App>,
		document.getElementsByClassName("todoapp")[0]);

})(window);
