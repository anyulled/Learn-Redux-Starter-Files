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

function addPost() {
    fetch("https://www.instagram.com/anyulled/media/")
        .then((data)=> {
            console.log(data.data);
            return {
                type: "add_posts",
                payload: data.data
            }
        }).catch((error)=> {
        console.log(error);
        return {
            type: "error",
            error
        }
    });
}

export {increment, addComment, removeComment};
