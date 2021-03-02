import React, { Component, Fragment } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'how are you doing today?',
            placeholder: 'Start typing to reply',
            hasLoaded: false
        }
    }

    handleInputChange = (value) => {
        this.setState({ text: value })
    }

    handleClick = () => {
        this.setState({
            hasLoaded: false
        })

    }

    componentDidMount = () => {
        this.setState({
            hasLoaded: true
        })

    }

    render() {
        if (this.state.hasLoaded === false) {
            return (
                <div>
                    <h1>Loading your response...</h1>
                    <button>Reload</button>
                </div>
            )

        } else {
            return (
                <Fragment>
                    <h1>{this.props.greet}, {this.state.text}</h1>
                    <input
                        placeholder={this.state.placeholder}
                        // value={this.state.text}
                        onChange={(event) => this.handleInputChange(event.target.value)} />
                    <button
                        onClick={this.handleClick}>Submit</button>
                </Fragment>
            );
        } 
    }
}

// function App (props) {
//     return <h1>Hi, {props.name}! React feels a bit complicated, but I'm figuring it out.</h1>;
// }

export default App;