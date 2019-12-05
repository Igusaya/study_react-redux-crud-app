import React, { Component} from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="bar">bar</label>
                <input type="text" onChange={() => {console.log("I am clicked!")}} />
            </React.Fragment>
        )
    }
}

//function App() {
//  return (
//    <div>Hello, World!</div>
//  );
//}

export default App;
