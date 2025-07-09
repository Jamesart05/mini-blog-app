import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost } from "../redux/features/blogSlice";

const PostList = () => {
    const posts = useSelector((state) => state.blog.posts)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editData, setEditData] = useState({title: "", content: ''})

    const handleEditClick = (post) => {
        setEditingId(post.id)
        setEditData({title: post.title, content: post.content})
    }

    const handleEditSubmit = (id) => {
        dispatch(editPost({id, ...editData}))
        setEditingId(null)
    }

    return (
        <div className="blog">
            {posts.map((post) => (
                <div className="" key={post.id}>
                    {editingId === post.id ? (
                        <div className="editing">
                            <input type="text"
                                value={editData.title}
                                onChange={(e) => setEditData({...editData, title: e.target.value})}
                                className=""
                            />
                            <textarea 
                                value={editData.content}
                                onChange={(e) => setEditData({...editData, content: e.target.value})}
                                className=""
                            />
                            <button onClick={() => handleEditSubmit(post.id)} className="">Save</button>
                            <button onClick={() => setEditingId(null)} className="">Cancel</button>
                        </div>
                    ): (
                        <div className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <div className="buttons">
                                <button onClick={() => handleEditClick(post)} className="edit">Edit</button>
                                <button onClick={() => dispatch(deletePost(post.id))} className="delete">Delete</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PostList