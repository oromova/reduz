import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from './Action';

function App() {
  const open = useSelector(state => state.open);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Modal</h1>
      <button onClick={() => dispatch(openModal())}>open modal</button>
      {!open ? "" : <div>Modal bor <span onClick={()=>dispatch(closeModal())}>x</span></div>
}
    </div>
  );
}

export default App;