import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=10"
    ).then((res) => res.json());
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const patchComment = createAsyncThunk(
  "comments/editComment",
  async ({ id, newData }) => {
    console.log(newData);
    await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newData),
    }).then((res) => res.json());

    return { id, changes: newData };
  }
);

const commentsAdapter = createEntityAdapter({
  selectId: (comment) => comment.id,
});

const commentsSlice = createSlice({
  name: "comments",
  initialState: commentsAdapter.getInitialState({ loading: false }),
  reducers: {
    setAllComments: commentsAdapter.setAll,
    setOneComment: commentsAdapter.setOne,
    setManyComments: commentsAdapter.setMany,
    updateOneComment: commentsAdapter.updateOne,
  },
  extraReducers: {
    [fetchComments.pending](state) {
      state.loading = true;
    },
    [fetchComments.fulfilled](state, { payload }) {
      state.loading = false;
      commentsAdapter.setAll(state, payload);
    },
    [fetchComments.rejected](state) {
      state.loading = false;
    },
    [deleteComment.rejected](state) {
      state.loading = false;
    },
    [deleteComment.pending](state) {
      state.loading = true;
    },
    [deleteComment.fulfilled](state, { payload: id }) {
      state.loading = false;
      commentsAdapter.removeOne(state, id);
    },
    [patchComment.pending](state) {
      state.loading = true;
    },
    [patchComment.fulfilled](state, { payload }) {
      state.loading = false;

      commentsAdapter.updateOne(state, {
        id: payload.id,
        changes: payload.changes,
      });
    },
  },
});

export const commentsSelectors = commentsAdapter.getSelectors(
  (state) => state.comments
);

export const {
  setAllComments,
  setOneComment,
  setManyComments,
  updateOneComment,
} = commentsSlice.actions;

export default commentsSlice.reducer;
