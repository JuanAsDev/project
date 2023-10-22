import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AdminContext } from "./AdminContext.js";
import Navbar from "./Navbar.js";

const Posting = () => {
  const { isAdminLoggedIn } = useContext(AdminContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(0);
  const [postings, setPostings] = useState([]);
  const [checkedPostings, setCheckedPostings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate("/home");
    }
  }, [isAdminLoggedIn, navigate]);

  useEffect(() => {
    fetch("http://localhost:3500/postings")
      .then((response) => response.json())
      .then((data) => setPostings(data))
      .catch((error) => console.error("Kesalahan mengambil data:", error));
  }, []);

  const handleSubmit = () => {
    const newPosting = {
      title,
      content,
      status,
    };

    fetch("http://localhost:3500/postings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPosting),
    })
      .then((response) => response.json())
      .then((data) => {
        setPostings([...postings, data]);
      })
      .catch((error) => console.error("Kesalahan saat menyimpan data:", error));

    setTitle("");
    setContent("");
    setStatus(0);
  };

  const handleCheckboxChange = (postId) => {
    const updatedPostings = postings.map((post) => {
      if (post.id === postId) {
        post.status = post.status === 0 ? 1 : 0;
      }
      return post;
    });

    setPostings(updatedPostings);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Halaman Posting</h1>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Judul:
          </label>
          <input
            type="text"
            id="title"
            className="border rounded-md p-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Konten:
          </label>
          <textarea
            id="content"
            className="border rounded-md p-2 w-full"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status:
          </label>
          <select
            id="status"
            className="border rounded-md p-2"
            value={status}
            onChange={(e) => setStatus(parseInt(e.target.value))}
          >
            <option value={0}>Draft</option>
            <option value={1}>Posting</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Daftar Postingan</h2>
          {postings.map((posting) => (
            <div key={posting.id} className="mb-2">
              <input
                type="checkbox"
                checked={checkedPostings.includes(posting.id)}
                onChange={() => handleCheckboxChange(posting.id)}
                className="mr-2"
              />
              <strong className="text-lg">{posting.title}</strong>
              <p className="text-gray-700">{posting.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Posting;
