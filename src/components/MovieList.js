import React from 'react';
import Movie from './Movie'
import MovieMenu from './MovieMenu';


// Component that manages the data and creates the menu and movie components
export default class MovieList extends React.Component {
    constructor (props) {
        super(props);

        // List of movies and their reviews
        let movieList = [
            {Name: 'Avatar', Type: 'Action', Year: '2022', Reviews: []},
            {Name: 'Star Wars', Type: 'SciFi', Year: '1977', Reviews: []},
            {Name: 'Pet Detective', Type: 'Comedy', Year: '1994', Reviews: []},
            {Name: 'John Carter', Type: 'SciFi', Year: '2012', Reviews: []},
            {Name: 'National Treasure', Type: 'Action', Year: '2004', Reviews: []},
            {Name: 'The Proposal', Type: 'Romance', Year: '2009', Reviews: []},
            {Name: 'The Conjuring', Type: 'Horror', Year: '2022', Reviews: []},
            {Name: 'Happy Gilmore', Type: 'Comedy', Year: '1996', Reviews: []}
        ];
        
        this.state = {
            movies: movieList,
            selectedMovie: null
        }

        this.handleMovieClick = this.handleMovieClick.bind(this);
        this.handleNewReview = this.handleNewReview.bind(this);
    }

    // Handles when the user clicks a movie on the menu
    handleMovieClick(moviename) {
        this.setState(state => {state.selectedMovie = state.movies.find(movie => movie.Name === moviename); return state;});
    }

    // Handles when a new review is created
    handleNewReview(review) {
        this.state.selectedMovie.Reviews.push(review);
    }

    // Create menu and movie components for the document
    render() { 
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-auto">
                        <MovieMenu {...{movies: this.state.movies, onClick: this.handleMovieClick}}/>
                    </div>
                    <div className="col-sm" id="movieinfo">
                        <Movie {...{movie: this.state.selectedMovie, onClick: this.handleNewReview}} />
                    </div>
                </div>
            </div>
        )
    }
}


