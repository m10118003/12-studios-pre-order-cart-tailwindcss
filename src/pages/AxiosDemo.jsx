import App from "@/App";
import { useState, useEffect } from "react";
import { createPost, updatePost, deletePost, getPost } from "@/api/postService";
import PropTypes from 'prop-types';

const ActionButton = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};
ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default function AxiosDemo() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        getPost(1).then((response) => {
            setPost(response.data);
        });
    }, []);

    // 定義 GetPost prop
    const handleGetPost = () => {
        getPost(1).then((response) => {
            setPost(response.data);
        });
    };

    // 定義 CreatePost prop
    const handleCreatePost = () => {
        const createPostData = { title: 'Hello !', body: 'Hi body.' };
        createPost(createPostData).then(response => {
            setPost(response.data); // 建立資料
        });
    };

    // 定義 UpdatePost prop
    const handleUpdatePost = () => {
        const updatePostData = { title: 'Meow Hello !', body: 'Meow body.' };
        updatePost(updatePostData).then(response => {
            setPost(response.data); // 更新資料
        })
    }

    // 定義 DeletePost prop
    const handleDeletePost = () => {
        deletePost(1).then(response => {
            alert("Post deleted!")
            setPost(response.data); // 刪除資料
        })
    }

    // 讀取畫面
    // if (!post) return null; // 整個畫面清空
    if (!post) return (
        <div>
            <p className="flex justify-center items-center"> {"Loading..."} </p>
        </div>
    );

    return (
        <div>
            <App />
            <main className="p-5">
                <h1 className="cursor-crosshair p-5 font-bold underline hover:rounded hover:bg-sky-200 hover:text-indigo-600">
                    Get data from an API
                </h1>
                <section className="p-5">
                    <ActionButton onClick={handleGetPost} className="text-2xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-100 hover:bg-sky-100 hover:text-indigo-600">Get Post</ActionButton>
                    <ActionButton onClick={handleCreatePost} className="text-2xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-200 hover:bg-sky-200 hover:text-indigo-600">Create Post</ActionButton>
                    <ActionButton onClick={handleUpdatePost} className="text-2xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-300 hover:bg-green-300 hover:text-indigo-500">Update Post</ActionButton>
                    <ActionButton onClick={handleDeletePost} className="text-2xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-400 hover:bg-yellow-400 hover:text-indigo-600">Delete Post</ActionButton>
                </section>
                <section className="text-left max-w-3xl mx-auto p-5">
                    <p className="mt-4 text-2xl font-black">{post.title}</p>
                    <p className="mt-4 text-2xl ">{post.body}</p>
                </section>
            </main>
        </div>
    );
}