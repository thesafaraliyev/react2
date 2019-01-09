import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

    };

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;