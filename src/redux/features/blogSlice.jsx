import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        posts: []
    },
    reducers: {
        addPost:{
            reducer(state, action) {
            state.posts.push(action.payload)
            },
            prepare(title, content){
                return{
                    payload:{
                        id: Date.now(),
                        title,
                        content,
                    }
                }
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        editPost:(state, action) =>{
            const {id, title, content} = action.payload
            const post = state.posts.find(post => post.id === id)
            if(post){
                post.title = title
                post.content = content
            }
        }
    }   
})

export const {addPost, deletePost, editPost} = blogSlice.actions
export default blogSlice.reducer