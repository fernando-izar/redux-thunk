import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";
import "./App.css";

function App() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleAddComment = () => {
    console.log("user", user);
    return dispatch(addCommentThunk(comment));
  };

  return (
    <div className="App">
      <h1>User Comments</h1>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      {/* <button onClick={() => dispatch(addCommentThunk("Primeiro comentário!"))}>
        Add Comment: {user.comments}
      </button> */}
      <button onClick={handleAddComment}>Add Comment</button>
      {/* <p>User: {user}</p> */}
    </div>
  );
}

export default App;
