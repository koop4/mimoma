import React from 'react';
import ReactDOM from 'react-dom';
import Card from './movie-card-component';

describe('Search Component', () => {
  const props = {
     movie: {
       url: [],
     },
     actions: {
       searchAction: () => {}
     }
  }
  it('Render without error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('use fallback cover', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})