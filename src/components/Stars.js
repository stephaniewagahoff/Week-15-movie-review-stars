import React from 'react'
import Rating from '@mui/material/Rating';


export default class Stars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rvalue: 0
        }
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({rvalue: Number(event.target.value)});
        this.props.onRatingChange(Number(event.target.value));
    }

    render () {
        return (
            <div>
                <Rating
                    name="movie-rating"
                    value={this.state.rvalue}
                    onChange={this.handleChange}
                />
            </div>

            
        )
    }
}