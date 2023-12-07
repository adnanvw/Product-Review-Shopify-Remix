import * as React from 'react';

import "./Circular.css"
import state from '../Store/store';
import { useSnapshot } from 'valtio';

const Circular = () => {

  const snap = useSnapshot(state)

  return (
    <>
      {snap.loader.open &&
        <div id="spinner">
          <div class="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>}
    </>
  )
}

export default Circular