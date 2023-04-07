import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  editHistoryItem,
  historyChangeUp,
  historyChangeDown,
} from "../../store/savings/savingsSlice";
import Operation from "../Operation";

import "./History.scss";

const History = () => {
  const history = useSelector((state) => state.savings.history);
  const dispatch = useDispatch();

  const onClickEditBtn = (id, number) => {
    const oldNum = +number;
    const newNum = prompt("new number?", +number);
    if (oldNum > newNum) {
      dispatch(historyChangeDown(oldNum - +newNum));
    } else if (oldNum < newNum) {
      dispatch(historyChangeUp(+newNum - oldNum));
    }
    dispatch(editHistoryItem({ id, newNum: +newNum }));
  };

  return (
    <div className="inner-wrapper">
      <ul className="history">
        {history.map(({ date, number, id }) => (
          <li className="history__item">
            <p className={"history__item-date"}>
              {date.split(",").join(" ").slice(0, 17)}
            </p>
            <div className="history__img-info-wrapper">
              <img className="img" alt="" />
              <div className="history__info-outer-wrapper">
                <p className="cost">{number}₽</p>
                <div className="history__info-wrapper">
                  <p className="source">Карта</p>{" "}
                  <div className="categories">Кафе и рестораны</div>{" "}
                </div>
              </div>
            </div>
            <button
              className="history__edit"
              onClick={() => onClickEditBtn(id, number)}
            >
              <svg
                width="10"
                height="15"
                viewBox="0 0 4 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2ZM0 7C0 5.89543 0.895431 5 2 5C3.10457 5 4 5.89543 4 7C4 8.10457 3.10457 9 2 9C0.895431 9 0 8.10457 0 7ZM2 10C0.895431 10 0 10.8954 0 12C0 13.1046 0.895431 14 2 14C3.10457 14 4 13.1046 4 12C4 10.8954 3.10457 10 2 10Z"
                  fill="#152A38"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
