/**
 * Created by anyulled on 7/11/16.
 */
import React from "react";
import Photo from "./Photo";

class Single extends React.Component {
    render() {
        const i = this.props.posts.findIndex((post)=>post.code === this.props.params.postId);
        const post = this.props.posts[i];
        return (<div className="single-photo">
            <Photo post={post} i={i} {...this.props} key={i}/>
        </div>);
    }
}

export default Single;