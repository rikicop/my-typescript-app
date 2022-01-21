import React, { useState } from "react";
import "./App.css";
/* import { User } from "./interfaces/Interface"; */
/* import Header from "./components/Header"; */
//import TypeScript from "./components/TypeScript";
/* import InlineDocsTS from "./components/InlineDocsTS"; */

/* const address = {
  street: "Casco Central",
  number: 32,
  zip: "4018",
  suite: "23",
}; */

const defaultFormData = {
  title: "",
  body: "",
};

function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    /* const [user, setUser] = useState<User | null>(null);

  const fetchUser = () =>
    setUser({
      name: "Ricardo",
      age: 36,
      country: "Venezuela",
      address: {
        street: "Casco Central",
        number: 32,
        zip: "4018",
        suite: "23",
      },
      admin: false,
    }); */
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

  return (
    <div>
      {/*  <TypeScript /> */}
      {/*  <InlineDocsTS address={address} /> */}
      {/* <Header headerText="This a great Header!!" extraTexto="Hey Jude!" /> */}
      {/*  <button onClick={fetchUser}>Fetch User</button>
      {user && <p>Bienvenido amigo {user.name}!!</p>} */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={onChange}
          placeholder="Body"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
