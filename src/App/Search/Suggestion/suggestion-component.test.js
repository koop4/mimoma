import React from 'react';
import ReactDOM from 'react-dom';
import Suggestion from './suggestion-component';

describe('Suggestion Container', () => {
  const props = {
    movie: {
      title: 'my title',
      id: 22
    },
    actions: {
      addToLibrary: () => {}, 
      addToLibraryFav: () => {}, 
    }
  }
  it('display possible results', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Suggestion  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})