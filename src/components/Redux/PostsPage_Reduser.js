const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT,
                                                             newText: newText,
                                                            });

let initialState = {  
    posts: [
      { id: 1, message: "Hi, how are you?" },
      { id: 2, message: "It is my first post" }
    ],
    newPostText: ''  
}                                                            

const postsReduser = (state = initialState, action) => {



switch(action.type) {
    case ADD_POST: {
      let post = {
        id: parseInt(state.posts[state.posts.length - 1].id + 1),
        message: state.newPostText
      }
      return { 
        ...state,
        posts: [ ...state.posts, post ],
        newPostText: ''      
      };
      
    }
    case UPDATE_NEW_POST_TEXT: {
      return { 
        ...state,
        newPostText: action.newText
      };         
      
    }
    default:
        return state;
    }
}

export default postsReduser;