import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';

// Component that contains the new review form and reviews of the movie that was passed through props
export default class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newreviewname: '',
            newreviewrating: 0,
            newreviewtext: ''            
        }

        this.onRatingChange = this.onRatingChange.bind(this);
        this.onNewReview = this.onNewReview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // Handles when the user selects a rating
    onRatingChange(ratingvalue) {
        this.setState({newreviewrating: ratingvalue});
    }

    // Handles when the user is entering input
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // Handles when the user selects to create the review
    onNewReview(event) {
        this.props.onClick({rname: this.state.newreviewname,
                            rrating: this.state.newreviewrating,
                            rdate: new Date().toLocaleDateString(),
                            rtext: this.state.newreviewtext});

        this.setState({newreviewname: '', newreviewrating: '', newreviewtext: ''});
    }

    // Creates the right side of the document, displaying the movie currently selected and all it's reviews
    // Also creates the form for the user to enter a new review
    render() {

        if (this.props.movie == null) {
            return (<div></div>)
        }

        else {
        return (
            <div>
                <div className='card'>
                    <div className='card-header' id='header'>
                        <div className='row'>
                            <h3>{this.props.movie.Name}</h3>
                            <h5>{this.props.movie.Type} - {this.props.movie.Year}</h5>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-sm-3'>
                                    <input
                                        type='text'
                                        name='newreviewname' 
                                        className='form-control' 
                                        value={this.state.newreviewname} 
                                        onChange={this.handleChange} 
                                        placeholder='Name'>
                                    </input>
                                </div>
                                <div className='col-sm-6'>
                                    <Stars {...{onRatingChange: this.onRatingChange}} />
                                </div>
                                <div className='col-sm-3'>
                                    <button 
                                        name='btn-newreview' 
                                        className='btn btn-dark form-control' 
                                        onClick={this.onNewReview}>
                                            Add Review
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-sm'>
                                    <textarea
                                        name='newreviewtext' 
                                        className='form-control'
                                        onChange={this.handleChange}
                                        value={this.state.newreviewtext} 
                                        rows='3'
                                        placeholder='Review'>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='card-body'>
                        <ReviewList reviews={this.props.movie.Reviews} />
                    </div>
                </div>
            </div>
        )
        }
    }
}