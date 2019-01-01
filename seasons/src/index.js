import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';



class App extends React.Component {
    state = {
            lat : null,
            errMsg : ''
        };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errMsg : error.message })
        );
    }

    renderContent() {
        if (this.state.errMsg && !this.state.lat) {
            return <h3>err : {this.state.errMsg} </h3>;
        }

        if (!this.state.errMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Waiting for user respond" />
    }

    render() {
        return this.renderContent()
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));