import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addition, countHistory } from "../../store/savings/savingsSlice";

import "./Operation.scss";

const Operation = () => {
  const [isModalShown, setIsModalShown] = React.useState(false);

  const modalRef = React.useRef();

  const dispatch = useDispatch();

  const onAddBtn = () => {
    setIsModalShown(!isModalShown);
    console.log(isModalShown);
    // const addingMoney = prompt();
    // const historyItemObj = {
    //   number: addingMoney,
    //   date: new Date().toLocaleString("ru-ru"),
    //   id: new Date(),
    // };

    // if (/^[0-9.,]+$/.test(addingMoney)) {
    //   dispatch(addition(+addingMoney));
    //   dispatch(countHistory(historyItemObj));
    // } else if (addingMoney === null) {
    //   return;
    // } else {
    //   onAddBtn();
    // }
  };

  function outsideClickHandler(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalShown(false);
    }
    if (e.target.className === "operation") {
      setIsModalShown(true);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener(outsideClickHandler);
    };
  }, []);

  return (
    <>
      {isModalShown && (
        <div className="modal">
          <div ref={modalRef} className="modal__info-wrapper">
            <select name="#" id=""></select>
            <div>
              <a href="#">Расход</a> <a href="">Доход</a>
            </div>
            <input type="text" placeholder="" />
            <input type="date" />
            <button>Сохранить</button>
          </div>
        </div>
      )}
      {!isModalShown && (
        <div className="operation" onClick={onAddBtn}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.98182 12V0H7.01818V12H4.98182ZM0 7.01818V4.98182H12V7.01818H0Z"
              fill="#001AFF"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Operation;
