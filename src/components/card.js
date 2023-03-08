import React, { useState, useEffect } from "react";

const MyCard = ({ data }) => {
  const [lastItem, setLastItem] = useState([]);

  useEffect(() => {
    if (data.length) {
      setLastItem(data.slice(-1)[0]);
    } else {
      setLastItem([]);
    }
  }, [data]);

  return (
    <div
      class="card"
      style={{
        width: "400px",
        height: "450px",
        overflowY: "auto",
        maxHeight: "450px",
      }}
    >
      <div class="card-body">
        <div class="card-header">
          <h5 class="card-title">Current Process Variables</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Air Temperature: </strong>
            {24.63}
          </li>
          <li class="list-group-item">
            <strong>Inlet Temperature:</strong> {22.34}
          </li>
          <li class="list-group-item">
            <strong>Flow Meter:</strong> {26}
          </li>
          <li class="list-group-item">
            <strong>Current_1:</strong> {32}
          </li>
          <li class="list-group-item">
            <strong>Current_2:</strong> {3}
          </li>
          <li class="list-group-item">
            <strong>Current_3:</strong> {524.53}
          </li>
          <li class="list-group-item">
            <strong>Total Flowrate:</strong> {26}
          </li>
          <li class="list-group-item">
            <strong>Moving Average:</strong> {0.0065}
          </li>
          <li class="list-group-item">
            <strong>Growth State:</strong> {"stationary_phase"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyCard;
