import * as React from 'react';
import { Spinner } from '@shopify/polaris';
import "./Circular.css"
import state from '../Store/store';
import { useSnapshot } from 'valtio';

const Circular = () => {

  const snap = useSnapshot(state)

  return (
    <>
      {snap.loader.open &&
        <div id="spinner">
          <Spinner size='large' />
        </div>}
    </>
  )
}

export default Circular