import React from "react";
import Review from "./Review";

// Component that displays all the reviews for the selected movie
export default class ReviewList extends React.Component {
    render () {
        let reviewlist = [];

       for (let review of this.props.reviews){
            reviewlist.push(<Review review={review} />);     
        }
        
        return (
            <div>
                {reviewlist}
            </div>
        )
    }
}