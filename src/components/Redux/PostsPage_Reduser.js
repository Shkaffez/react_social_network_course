const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT,  newText: newText,});
export const setUserProfile = (userProfile) => ({ type: SET_USER_PROFILE, userProfile: userProfile })

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?" },
    { id: 2, message: "It is my first post" }
  ],
  newPostText: '',
  userProfile: null,
}

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: parseInt(state.posts[state.posts.length - 1].id + 1),
        message: state.newPostText
      }
      return {
        ...state,
        posts: [...state.posts, post],
        newPostText: ''
      };

    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        userProfile: action.userProfile
      }
    }
    default:
      return state;
  }
}

export default postsReduser;