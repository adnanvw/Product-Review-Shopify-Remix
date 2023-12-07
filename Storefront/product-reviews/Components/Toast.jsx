import state from "../Store/store";
import { useSnapshot } from "valtio";
import { hideToast } from "../Store/utils.js"

const ToastExample = () => {

  const snap = useSnapshot(state)



  const dismissToast = () => {
    hideToast()
  }

  setTimeout(() => {
    dismissToast()
  }, 3000);



  const toastMarkup = (
    <div class={`toast align-items-center text-bg-${snap.toast.error ? "danger" : "success"} border-0 fade ${snap.toast.open ? "show" : "hide"}`} role="alert" aria-live="assertive" aria-atomic="true" style={{
      position: "fixed",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)", 
      zIndex: 1000,
      marginBottom:"16px", 
    }}>
      <div class="d-flex">
        <div class="toast-body">
          {snap.toast.message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={dismissToast}></button>
      </div>
    </div>
  )
  return (
    <>
      {toastMarkup}
    </>
  );
}

export default ToastExample