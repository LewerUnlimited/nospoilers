import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, withRouter} from 'react-router-dom';
import Genre from './Genre';

class GenreSearch extends Component {
    constructor() {
        super();
        this.state = {
            genres: [],
        };
    }
    componentDidMount() {
        let initialGenres = [];
        fetch('http://localhost:9000/genres')
            .then(response => {
                return response.json();
            }).then(data => {
                initialGenres = data.genres.map((genre) => {
                    return genre
                });
            console.log(initialGenres);
            this.setState({
                genres: initialGenres,
            });
        });
    }
    render() {
        return (
            <Genre state={this.state}/>
        );
    }
}

ReactDOM.render(<GenreSearch />, document.getElementById('root'));

export default GenreSearch;


