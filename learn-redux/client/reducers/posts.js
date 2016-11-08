/**
 * Created by anyulled on 7/11/16.
 */

const posts = function (state = [], action) {
    const i = action.index;
    switch (action.type) {
        case "increment_likes":
            console.log(action.type);
            //TODO look for an optimal way to do this
            return [
                ...state.slice(0, i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ];
            break;
        default:
            return state;
    }
};

export default posts;