import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App/app-component';

describe('App Component', () => {
  const props = {
    category: { userMovies: [], userMoviesFav: [] },
    search: { fetched: [] }
  }

  it('renders DOM without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App  { ...props}  />, div);
    ReactDOM.unmountComponentAtNode(div);

  });

})