import React from 'react';
import ReactDOM from 'react-dom';
import Category from './category-component';

describe('Category Section', () => {
  const props = {
    status: {
      name: 'user list',
      list: []
    },
    movie: {
      title: 'my title',
      id: 22
    },
    actions: {
      addToLibrary: () => {}, 
      addToLibraryFav: () => {}, 
    }
  }
  it('display user list category', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Category  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('display favorite list category', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Category  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})