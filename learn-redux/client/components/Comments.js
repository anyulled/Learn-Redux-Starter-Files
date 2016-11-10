/**
 * Created by anyulled on 8/11/16.
 */
import React from "react";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleComment = this.handleComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleChange = this.handleChange.bind(this);
    }

    handleComment(comment, index) {
        return (<div className="comment" key={index}>
            <p><
                strong>{comment.user}</strong>
                {comment.text}
                <button className="remove-comment">&times;</button>
            </p>
        </div>);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {postId} = this.props.params;
        const {author, comment} = this.refs;
        this.props.addComment(postId, author.value, comment.value);
        this.refs.author.value = "";
        this.refs.comment.value = "";
    }

    render() {
        return (<div className="comments">
            {this.props.postComments.map((comment, index)=> this.handleComment(comment, index))}
            <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="author" placeholder="author"/>
                <input type="text" ref="comment" placeholder="comment"/>
                <input type="submit" hidden/>
            </form>
        </div>);
    }
}

export default Comments;