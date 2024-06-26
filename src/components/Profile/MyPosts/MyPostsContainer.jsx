import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/reducer/profileReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        post: state.profilePage.post,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onPostChange: (text) => dispatch(updatePostActionCreator(text))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer