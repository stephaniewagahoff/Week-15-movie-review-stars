import React from 'react';

// Component that renders the movie menu for the document
export default class MovieMenu extends React.Component {
    constructor (props) {
        super(props);

        this.actionmovies = this.props.movies.filter(item => item.Type === 'Action');
        this.comedymovies = this.props.movies.filter(item => item.Type === 'Comedy');
        this.horrormovies = this.props.movies.filter(item => item.Type === 'Horror');
        this.romancemovies = this.props.movies.filter(item => item.Type === 'Romance');
        this.scifimovies = this.props.movies.filter(item => item.Type === 'SciFi');

        this.handleClick = this.handleClick.bind(this);
    }

    // Handles when the user clicks a movie by passing the value to the parent component
    handleClick(value) {
        this.props.onClick(value);
    }

    // Create an array of buttons for each categorie and display them using the bootstrap accordion class
    render () {
        let actionButtons = [];
        let comedyButtons = [];
        let horrorButtons = [];
        let romanceButtons = [];
        let scifiButtons = [];

        for (let movie of this.actionmovies) {
            actionButtons.push(<button id={movie.Name} className='btn btn-link' onClick={() => this.handleClick(movie.Name)}>{movie.Name}</button>);
            actionButtons.push(<br></br>)
        }

        for (let movie of this.comedymovies) {
            comedyButtons.push(<button id={movie.Name} className='btn btn-link' onClick={() => this.handleClick(movie.Name)}>{movie.Name}</button>);
            comedyButtons.push(<br></br>)
        }

        for (let movie of this.horrormovies) {
            horrorButtons.push(<button id={movie.Name} className='btn btn-link' onClick={() => this.handleClick(movie.Name)}>{movie.Name}</button>);
            horrorButtons.push(<br></br>)
        }

        for (let movie of this.romancemovies) {
            romanceButtons.push(<button id={movie.Name} className='btn btn-link' onClick={() => this.handleClick(movie.Name)}>{movie.Name}</button>);
            romanceButtons.push(<br></br>)
        }

        for (let movie of this.scifimovies) {
            scifiButtons.push(<button id={movie.Name} className='btn btn-link' onClick={() => this.handleClick(movie.Name)}>{movie.Name}</button>);
            scifiButtons.push(<br></br>)
        }

        return (
            <div className="card">
                <div className="card-header text-center" id='header'>
                    Movies
                </div>
                <div className="card-body">
                    <div className="accordion accordion-flush" id="divMovies">
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordionAction">
                                <button id="btnAction" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAction" aria-expanded="false" aria-controls="collapseAction">
                                    Action
                                </button>
                            </div>
                            <div id="collapseAction" className="accordion-collapse collapse" aria-labelledby="accordionAction" data-bs-parent="#divMovies">
                                <div className="accordion-body">
                                    {actionButtons}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordionComedy">
                                <button id="btnComedy" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseComedy" aria-expanded="false" aria-controls="collapseComedy">
                                    Comedy
                                </button>
                            </div>
                            <div id="collapseComedy" className="accordion-collapse collapse" aria-labelledby="accordionComedy" data-bs-parent="#divMovies">
                                <div className="accordion-body">
                                    {comedyButtons}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordionHorror">
                                <button id="btnHorror" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHorror" aria-expanded="false" aria-controls="collapseHorror">
                                    Horror
                                </button>
                            </div>
                            <div id="collapseHorror" className="accordion-collapse collapse" aria-labelledby="accordionHorror" data-bs-parent="#divMovies">
                                <div className="accordion-body">
                                    {horrorButtons}
                                </div>
                            </div>
                        </div>   
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordionRomance">
                                <button id="btnRomance" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRomance" aria-expanded="false" aria-controls="collapseRomance">
                                    Romance
                                </button>
                            </div>
                            <div id="collapseRomance" className="accordion-collapse collapse" aria-labelledby="accordionRomance" data-bs-parent="#divMovies">
                                <div className="accordion-body">
                                    {romanceButtons}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <div className="accordion-header" id="accordionSciFi">
                                <button id="btnSciFi" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSciFi" aria-expanded="false" aria-controls="collapseSciFi">
                                    SciFi
                                </button>
                            </div>
                            <div id="collapseSciFi" className="accordion-collapse collapse" aria-labelledby="accordionSciFi" data-bs-parent="#divMovies">
                                <div className="accordion-body">
                                    {scifiButtons}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}