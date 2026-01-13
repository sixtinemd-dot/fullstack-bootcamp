import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: '', //loading / Success / error ,...
}

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const response = await axios.get(POSTS_URL);
    return response.data
})

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        addreaction: (state, action) => {
            const {id, name} = action.payload

            const post = state.posts.find(item => item.id === id)
            if(post) {
                post.reactions[name]++
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state) => {
            state.status = 'loading'
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success'
            const newPosts = action.payload.map((item) => {
                return {...item, reactions: {thumbsUp: 0, heart: 0, wow: 0}}
            })
            state.posts = newPosts;
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.status = 'error';
        })
    }
});

export const { addreaction } = postsSlice.actions;
export default postsSlice.reducer;