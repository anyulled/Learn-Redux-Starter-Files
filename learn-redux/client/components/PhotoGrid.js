/**
 * Created by anyulled on 7/11/16.
 */
import React from "react";
import Photo from "./Photo";

class PhotoGrid extends React.Component {
    render() {
        return (<div className="photo-grid">
            {this.props.posts.map((post, index) => <Photo post={post} i={index} {...this.props} key={index}/>)}
        </div>);
    }
}

export default PhotoGrid;