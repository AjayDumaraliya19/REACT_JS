import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import sweetAlt from "sweetalert2";

function App() {
  const [data, setdata] = useState([]);

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setdata(res.data || []);
    });
  }, []);

  const dataSubmit = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };

    axios.post("http://localhost:3000/posts", result).then((res) => {
      setdata([...data, result]);
      sweetAlt.fire({
        title: "Added..!",
        text: `${result.title} has been added to the list!`,
        icon: "success",
      });
    });
  };

  const dataDelete = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}`).then(() => {
      console.log(id);
      setdata(data.filter((e) => e.id !== id));
      sweetAlt.fire({
        title: "Deleted..!",
        text: `Post with ID ${id} has been deleted!`,
        icon: "error",
      });
    });
  };

  return (
    <div className="container">
      <div className="mainDiv">
        <div className="FieldDiv">
          <div className="formCtl flex">
            <input
              className="inputField"
              type="text"
              name="title"
              ref={title}
              placeholder="Title"
            />
            <input
              className="inputField"
              type="text"
              name="author"
              ref={author}
              placeholder="Author"
            />
          </div>
          <button className="btn" onClick={dataSubmit}>
            Submit
          </button>
        </div>
        <hr />

        <div className="">
          {data?.map((value, index) => {
            return (
              <div>
                <h1>{value.title}</h1>
                <h3>{value.author}</h3>
                <button onClick={() => dataDelete(value.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
