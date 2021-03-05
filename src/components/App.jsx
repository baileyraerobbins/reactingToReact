import React, { useState, useEffect } from 'react';

const App = (props) => {
    const [text, setText] = useState('how are you today?');
    const [placeholder, setPlaceholder] = useState('Start typing here');
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setHasLoaded(true)
    }, []);

    if (hasLoaded === false) {
        return (
            <div>
                <h1>Loading your response...</h1>
                <button
                    onClick={() => setHasLoaded(true)}>Reload</button>
            </div>
        )
    }

    return (
        <>
            <h1>{props.greet}, {text}</h1>
            <input
                placeholder={placeholder}
                onChange={(event) => setText(event.target.value)} />
            <button
                onClick={() => setHasLoaded(false)}>Submit</button>
        </>
    )
}

// class App extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: 'how are you doing today?',
//             placeholder: 'Start typing to reply',
//             hasLoaded: false
//         }
//     }

//     handleInputChange = (value) => {
//         this.setState({ text: value })
//     }

//     handleClick = () => {
//         this.setState({
//             hasLoaded: false
//         })

//     }

//     componentDidMount = () => {
//         this.setState({
//             hasLoaded: true
//         })

//     }

//     render() {
//         if (this.state.hasLoaded === false) {
//             return (
//                 <div>
//                     <h1>Loading your response...</h1>
//                     <button>Reload</button>
//                 </div>
//             )

//         } else {
//             return (
//                 <Fragment>
//                     <h1>{this.props.greet}, {this.state.text}</h1>
//                     <input
//                         placeholder={this.state.placeholder}
//                         // value={this.state.text}
//                         onChange={(event) => this.handleInputChange(event.target.value)} />
//                     <button
//                         onClick={this.handleClick}>Submit</button>
//                 </Fragment>
//             );
//         } 
//     }
// }

//Function
// function App (props) {
//     return <h1>Hi, {props.name}! React feels a bit complicated, but I'm figuring it out.</h1>;
// }

export default App;