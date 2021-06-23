import { Button } from "antd";
import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

function ModalSuccessCheckOut(props, ref) {
  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    []
  );

  function open() {
    document.querySelector(".modalSuccessCheckOut").classList.add("show");
    document.querySelector("body").classList.add("modal-open");
    document
      .querySelector(".modalSuccessCheckOut-wrapper")
      .classList.add("show");
  }
  function close() {
    document.querySelector(".modalSuccessCheckOut").classList.remove("show");
    document.querySelector("body").classList.remove("modal-open");
    document
      .querySelector(".modalSuccessCheckOut-wrapper")
      .classList.remove("show");
  }

  return ReactDOM.createPortal(
    <>
      <div className="modalSuccessCheckOut">
        {/* <i class="fas fa-times modalSuccessCheckOut-close"></i> */}
        <i className="far fa-check-circle modalSuccessCheckOut-icon"></i>
        <p className="modalSuccessCheckOut-success">Tuyệt vời</p>
        <p className="modalSuccessCheckOut-text">Bạn đã mua hàng thành công</p>
        <Button
          type="primary"
          className="modalSuccessCheckOut-button"
          onClick={(e) => {
            ref.current.close();
          }}
        >
          Tiếp tục mua sắm
        </Button>
      </div>
      <div
        className="modalSuccessCheckOut-wrapper"
        onClick={(e) => {
          ref.current.close();
        }}
      ></div>
    </>,
    document.getElementById("modal")
  );
}

export default forwardRef(ModalSuccessCheckOut);
