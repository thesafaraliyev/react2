import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay'



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat : null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude })
            },
            error => console.log(error)
        );
    }


    render() {
        return <div>lat : {this.state.lat} </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));