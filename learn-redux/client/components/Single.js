/**
 * Created by anyulled on 7/11/16.
 */
import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends React.Component {
    render() {
        const {postId} = this.props.params;
        const i = this.props.posts.findIndex((post)=>post.code === postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        return (<div className="single-photo">
            <Photo post={post} i={i} {...this.props} key={i}/>
            <Comments postComments={postComments} {...this.props}/>
        </div>);
    }
}

export default Single;