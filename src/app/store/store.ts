import { Reducer, Store, configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import likedMoviesSlice from "./likedMoviesSlice";
import watchedMovieSlice from "./watchedMoviesSlice";
import wishlistMoviesSlice from "./wishlistMoviesSlice";
import _ from 'lodash';

const preloadedState: Reducer = {
  search: { value: '' },
  ...localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState') || '') : {}
};

export const store = configureStore({
  reducer: {
    search: searchSlice,
    likedMovies: likedMoviesSlice,
    watchedMovies: watchedMovieSlice,
    wishlistMovies: wishlistMoviesSlice,
  },
  preloadedState,
});

observeStore<Omit<RootState, 'search'>>(
  store,
  store => _.omit(store, 'search'),
  currentState => {
    localStorage.setItem('reduxState', JSON.stringify(currentState));
  }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

function observeStore<T>(store: Store, select: (store: RootState) => T, onChange: (currentState: RootState | T) => void) {
  let currentState: RootState | T;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);

  handleChange();

  return unsubscribe;
}
