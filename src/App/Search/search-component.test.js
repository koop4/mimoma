import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search-component';

describe('Search Component', () => {
  const props = {
     status: {
       fetched: [],
     },
     actions: {
       searchAction: () => {}
     }
  }
  it('Render without error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('Allow search in input field', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search  { ...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})