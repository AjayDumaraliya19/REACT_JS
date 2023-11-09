// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState({});

//   // const submit = () => {
//   const handler = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };
//   // };

//   console.log(value);

//   return (
//     <div>
//       <div>
//         <h1>{value}</h1>
//         <input type="text" name="fname" />
//         <input type="text" name="lname" />
//         <input type="number" name="pnone" />
//         <button onClick={handler}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [value, setValue] = useState(value);

//   const handler = (e) => {
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   console.log(value);

//   return (
//     <div>
//       <div>
//         <pre>{JSON.stringify(value, null, 2)}</pre>
//         <input type="text" name="fname" />
//         <input type="text" name="lname" />
//         <input type="number" name="phone" />{value}
//         <button onClick={handler}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState({});
  const [submitted, setSubmitted] = useState(false); 

  const handler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  console.log(value);

  return (
    <div>
      <div>
        <pre>{JSON.stringify(value, null, 2)}</pre>
        <input type="text" name="fname" />
        <input type="text" name="lname" />
        <input type="number" name="phone" />
        <button onClick={handleSubmit}>Submit</button>
        {submitted && <h1>{JSON.stringify(value)}</h1>}
      </div>
    </div>
  );
};

export default App;
