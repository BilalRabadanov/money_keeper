import React from "react";

import { useSelector } from "react-redux";

import sl from "./Balance.module.scss";

const Balance = () => {
  const balance = useSelector((state) => state.savings.balance);

  return (
    <>
      <div className={sl.balance}>
        <div className="inner-wrapper">
          <p className={sl["balance__number"]}>{balance}₽</p>
          <p className={sl["balance__substring"]}>Баланс</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
