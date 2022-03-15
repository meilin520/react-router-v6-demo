import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getImageById } from '../assets/images';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

const Modal = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    let image = getImageById(Number(id));
    let buttonRef = React.useRef(null);
  
    function onDismiss() {
      navigate(-1);
    }
  
    if (!image) return null;
  
    return (
      <Dialog
        aria-labelledby="label"
        onDismiss={onDismiss}
        initialFocusRef={buttonRef}
      >
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            padding: "8px 8px",
          }}
        >
          <h1 id="label" style={{ margin: 0 }}>
            {image.title}
          </h1>
          <img
            style={{
              margin: "16px 0",
              borderRadius: "8px",
              width: "100%",
              height: "auto",
            }}
            width={400}
            height={400}
            src={image.src}
            alt=""
          />
          <button
            style={{ display: "block" }}
            ref={buttonRef}
            onClick={onDismiss}
          >
            Close
          </button>
        </div>
      </Dialog>
    );
  }

  export default Modal;