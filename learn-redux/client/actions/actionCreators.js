/**
 * Created by anyulled on 7/11/16.
 */

function increment(index) {
    return {
        type: "increment_likes",
        index
    };

}

function addComment(postId, author, comment) {
    return {
        type: "add_comment",
        postId,
        author,
        comment
    };

}

function removeComment(postId, commentId) {
    return {
        type: "remove_comment",
        postId,
        commentId
    };

}

export {increment, addComment, removeComment};