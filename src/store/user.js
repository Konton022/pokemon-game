import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: {},
  },
  reducers: {
    fetchUser: () => ({
      isLoading: true,
    }),
    updateUser: (state, action) => ({
      isLoading: false,
      data: action.payload,
    }),
    removeUser: () => ({
      isLoading: false,
      data: {},
    }),
  },
});

export const { fetchUser, updateUser, removeUser } = slice.actions;

export const selectUserLoading = (state) => state.user.isLoading;
export const selectUser = (state) => state.user.data;
export const selectLocalId = (state) => state.user.data?.localId;

export const getUserUpdateAsync = () => async (dispath) => {
  const idToken = localStorage.getItem("idToken");
  if (idToken) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ idToken }),
    };
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDQW9QFQydo9JtMPkVxxAt55ImBDXyNUsQ",
      requestOptions
    ).then((res) => res.json());
    // console.log("###response", response);
    if (response.hasOwnProperty("error")) {
      localStorage.removeItem("idToken");
      dispath(removeUser());
    } else {
      dispath(updateUser(response.users[0]));
      console.log("###response.users[0]", response.users[0]);
    }
  } else {
    dispath(removeUser());
  }
};

export const getUserAsync = () => (dispath) => {
  dispath(fetchUser);
  dispath(getUserUpdateAsync);
};
export default slice.reducer;
