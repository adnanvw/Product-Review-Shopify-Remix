import { Toast, Frame, Page, Button } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import state from "../Store/store";
import { useSnapshot } from "valtio";
import {hideToast} from "../Store/utils.js"

const ToastExample = () => {

  const snap = useSnapshot(state)

  

  const dismissToast = () => {
    hideToast()
  }

  setTimeout(() => {
    dismissToast()
  }, 3000);

  const toastMarkup = (
    <Toast content={snap.toast.message} onDismiss={dismissToast} error={snap.toast.error} />
  )

  return (
    <div style={{ height: '100%', display: snap.toast.open ? "block" : "none", position:"absolute" }}>
      <Frame>
        {snap.toast.open ? toastMarkup : null}
      </Frame>
    </div>
  );
}

export default ToastExample