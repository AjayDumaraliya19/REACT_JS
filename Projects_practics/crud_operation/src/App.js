import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import sweetAlt from "sweetalert2";

function App() {
  const [data, setdata] = useState([]);
  const [update, setUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const title = useRef();
  const author = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setdata(res.data || []);
    });
  }, []);

  const dataSubmit = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };

    axios.post("http://localhost:3001/posts", result).then((res) => {
      setdata([...data, result]);
      sweetAlt.fire({
        title: "Added..!",
        text: `${result.title} has been added to the list!`,
        icon: "success",
      });
    });
  };

  const dataDelete = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`).then(() => {
      setdata(data.filter((item) => item.id !== id));
      sweetAlt.fire({
        title: "Deleted..!",
        text: `Post with ID ${id} has been deleted!`,
        icon: "error",
      });
    });
  };

  const updatData = (id, ind) => {
    const final = data[ind];
    setUpdate(final);
    setIsUpdating(true);
  };

  const finalUpdate = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const final = () => {
    axios.put(`http://localhost:3001/posts/${update.id}`, update).then(() => {
      const updatedData = [...data];
      const index = updatedData.findIndex((item) => item.id === update.id);
      updatedData[index] = update;
      setdata(updatedData);
      setIsUpdating(false);
    });
  };

  /** When using the splice mathod to findindex
   * setData(data.spice())
   */

  const handleClick = () => {
    if (isUpdating) {
      final();
    } else {
      dataSubmit();
    }
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
              value={update.title || ""}
              onChange={finalUpdate}
            />
            <input
              className="inputField"
              type="text"
              name="author"
              ref={author}
              placeholder="Author"
              value={update.author || ""}
              onChange={finalUpdate}
            />
          </div>
          <button className="btn" onClick={handleClick}>
            {isUpdating ? "Update" : "Submit"}
          </button>
        </div>

        <div className="">
          {data?.map((value, index) => {
            return (
              <div key={index}>
                <h1>{value.title}</h1>
                <h3>{value.author}</h3>
                <button onClick={() => dataDelete(value.id)}>Delete</button>
                <button onClick={() => updatData(value.id, index)}>Update</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
