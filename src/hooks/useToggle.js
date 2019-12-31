import {useState} from 'react';

export default (initialState) => {
  const [state, setState] = useState(initialState);

  const useToggle = () => setState(!state);

  return [state, useToggle];
}