import React from 'react';

class Genre extends React.Component {
    constructor() {
        super();
    }

    render () {
        let genres = this.props.state.genres;
        let optionItems = genres.map((genre) =>
                <option id={genre.id}>{genre.name}</option>
            );

        return (
         <div>

             <select>
                <option value="null">Select an Option</option>
                {optionItems}
             </select>
         </div>
        )
    }
}

export default Genre;