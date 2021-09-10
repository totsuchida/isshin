import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { message: 'something' };
	}

	onChange(e) {
		this.setState({ message: e.target.value });
	}

	render() {
		return (
			<div>
				<p>Hello React!</p>
				<input type="text" onChange={this.onChange.bind(this)} />
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default App;