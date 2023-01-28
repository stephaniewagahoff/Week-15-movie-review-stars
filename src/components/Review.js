import React from "react";
import Rating from '@mui/material/Rating';

// Component that lists a single review
export default class Review extends React.Component {
    render () { 
        return (
            <div className="card">
                <div className="card-header" id='header'>
                    <h5>{this.props.review.rname}</h5>
                    <Rating name="read-only" value={this.props.review.rrating} readOnly />
                    <h6>{this.props.review.rdate}</h6>
                </div>
                <div className="card-body">
                    <h6>{this.props.review.rtext}</h6>
                </div>
            </div>
        )
    }
}