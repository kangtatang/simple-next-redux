import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "POST 1",
    description: "just a description",
  },
  {
    id: 2,
    title: "POST 2",
    description: "just a description 2",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    updatePost: (state, action) => {
      const { id, title, description } = action.payload;
      const postIndex = state.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        state[postIndex].title = title;
        state[postIndex].description = description;
      }
    },
    deletePost: (state, action) => {
      const postId = action.payload;
      return state.filter((post) => post.id !== postId);
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
