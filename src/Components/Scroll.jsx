import axios from "axios";
import React, { useEffect, useState, useRef } from "react";

export const Scroll = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/Data",
      params: {
        _page: 1,
        _limit: 25,
      },
    }).then((res) => setData(res.data));
  }, []);

  console.log(data);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    // console.log(goingUp, currentScrollY);
  };

  return (
    <div
      style={{
        height: "400px",
        width: "40%",
        border: "1px solid red",
        margin: "auto",
      }}
    >
      <div onScroll={onScroll} style={{ height: 300, overflowY: "scroll" }}>
        {data.map((f, i) => {
          return <p key={i}>{f.first_name}</p>;
        })}
      </div>
    </div>
  );
};
