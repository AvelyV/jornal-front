import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import journalContext from "../jornalContext";
import api from "../api";

export default function NewEntry() {
  useEffect(() => console.log("useEffect: New Entry"), []);
  // get access to props
  const params = useParams();
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  const {
    state: { categories },
    dispatch,
  } = useContext(journalContext);
  const category = categories.find((cat) => cat.id == params.cat_id);

  async function submit(e) {
    // so it's not reloading the page when we submit the form
    e.preventDefault();

    const res = await api.post('entries', {
          content: entry,
          cat_id: params.cat_id,
        })

    // const res = await fetch("http://localhost:4000/entries", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     content: entry,
    //     cat_id: params.cat_id,
    //   }),
    // });
    // const journalEntry = await res.json();

    dispatch({
      type: "addEntry",
      entry: res.data
    });
    navigate("/");
  }

  return category ? (
    <div>
      <h2>New Entry in {categories.name}</h2>
      {/* when button is pushed, will activate function submit */}
      <form onSubmit={submit}>
        <div>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows="10"
            cols="60"
          ></textarea>
        </div>
        <button>Create</button>
      </form>
    </div>
  ) : (
    <p>Loading ....</p>
  );
}
