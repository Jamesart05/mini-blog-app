import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/features/blogSlice";

const PostEditor = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && content) {
            dispatch(addPost(title, content))
            setTitle('')
            setContent('')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your post title" />
                <textarea className="" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter your post content" />
                <button type="submit" className="">Add Post</button>
            </form>
        </div>
    )
}

export default PostEditor