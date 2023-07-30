import React, { useState, useEffect } from "react";

export default function NewGames() {
  const [list, setList] = useState(null);

  // useEffect(() => {
  //   fetch("/moby/")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setList(data);
  //     });
  // }, []);
  return <div>NewGames</div>;
}


// fetch("/moby/", {
//   method: "POST",
//   Body: "fields *;",
//   headers: {
//     "Client-ID": "fpqvqyvv64hh2f2gp08e5grjr5nt94",
//     "Authorization": "Bearer wf6ymq3e31joxamg67awjt6wz9rul7",
//   },
// })