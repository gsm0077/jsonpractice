import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

function List() {
  const [list, setList] = useState([]);

  let getdata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((res) => {
        console.log(res);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getdata(), []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((data) => {
              return (
                <tr>
                  <td>{data.id}</td>
                  <td>{ data.title}</td>
                  <td>{ data.body}</td>
                </tr>  
                
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default List;
