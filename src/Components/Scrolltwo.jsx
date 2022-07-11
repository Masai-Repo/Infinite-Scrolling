import React, { useEffect, useState } from "react";
import axios from "axios";

export const Scrolltwo = () => {
  const [users, setState] = useState([]);
  const [page, setPage] = useState(1);
  console.log(users);
  const getUsers = () => {
    // setPage(page + 1);
    axios({
      url: `http://localhost:8080/Data`,
      method: "GET",
      params: {
        _page: page,
        _limit: 25,
      },
    })
      .then((res) => {
        console.log(res);

        setState([...users, ...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const scroll = (e) => {
    // *simplified, to only handle appending to the list
    // note the 50px from the bottom, adjust as required
    // so that the request is made before the users reaches
    // the bottom of the page under normal scrolling conditions.
    if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight) {
      if (users.length < 200) {
        setPage(page + 1);
        getUsers();
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#FFFFFF" }}>
        Infinite Scrolling Demo
      </h1>
      <div
        style={{
          height: "400px",
          backgroundColor: "#FFFFFF",
          width: "35%",
          margin: "auto",
          border: "1px solid red",
          marginTop: "40px",
        }}
      >
        <div
          onScroll={scroll}
          style={{
            height: 300,
            width: "80%",
            margin: "auto",
            overflowY: "scroll",
            textAlign: "match-parent",
            border: "10px solid red",
            marginTop: "20px",
          }}
        >
          {users.map((user, index) => (
            <p>
              Name:
              {user.first_name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
