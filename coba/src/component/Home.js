import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/postings?status=1")
      .then((response) => response.json())
      .then((data) => setPostings(data))
      .catch((error) => console.error("Kesalahan mengambil data:", error));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-green-500">Halaman Home</h1>
        <div>
          {postings.map((posting) => (
            <div
              key={posting.id}
              className="mb-4 p-4 border border-gray-200 rounded "
            >
              <h2 className="text-xl font-semibold mb-2">{posting.title}</h2>
              <p>{posting.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
