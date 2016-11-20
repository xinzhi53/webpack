// (function(){
		var React = require("react");
	var ReactDOM = require("react-dom");
		var Footer = React.createClass({
		render: function() {
			return <footer className="footer">
				<span className="todo-count"><strong>{this.props.leftTodos}</strong> item left</span>
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
		}
	});
		module.exports = Footer;
		// return Footer;
// })()