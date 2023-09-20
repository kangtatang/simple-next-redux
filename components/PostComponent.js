"use client";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "@/store/slices/postSlice";
import { useState } from "react";

import React from "react";

const PostComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch(); // Anda perlu menambahkan tanda kurung () di sini
  const posts = useSelector((state) => state.posts);
  const handleRemovePost = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleAddpost = (e) => {
    e.preventDefault();
    if (!title && !description) return;
    const newPost = {
      id: Date.now(),
      title: title,
      description: description,
    };
    dispatch(addPost(newPost));
    setTitle("");
    setDescription("");
  };
  console.log(posts);
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="description"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-sm btn-info"
            onClick={handleAddpost}
          >
            Add Post
          </button>
        </div>
      </form>
      {Array.isArray(posts) && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="alert alert-primary">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleRemovePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Post Not Found!</p>
      )}
    </div>
  );
};

export default PostComponent;
