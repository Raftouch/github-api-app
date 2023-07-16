import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const localStorageFavKey = 'favkey'

interface GithubState {
  favourites: string[]
}

const initialState: GithubState = {
  // favourites: []
  favourites: JSON.parse(localStorage.getItem(localStorageFavKey) ?? '[]'),
}

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload)
      localStorage.setItem(localStorageFavKey, JSON.stringify(state.favourites))
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload)
      localStorage.setItem(localStorageFavKey, JSON.stringify(state.favourites))
    },
  },
})

export const githubActions = githubSlice.actions
export const githubReducer = githubSlice.reducer
