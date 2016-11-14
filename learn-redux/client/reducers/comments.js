/**
 * Created by anyulled on 7/11/16.
 */

const postComments = function (state = [], action) {
    switch (action.type) {
        case "add_comment":
            console.log("adding comment");
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case "remove_comment":
            console.log("remove comment", action);
            return [
                ...state.slice(0, action.commentId),
                ...state.slice(action.commentId + 1)
            ];
        default:
            return state;
    }
};

const comments = function (state = [], action) {
    if (typeof action.postId !== "undefined") {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
};

export default comments;