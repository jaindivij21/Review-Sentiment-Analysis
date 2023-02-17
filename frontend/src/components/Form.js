import React, { useState } from "react";
import axios from "axios";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const URL = "http://localhost:5000/";

function App() {
  const [file, setFile] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const jsonData = event.target.result;
        axios.post(URL, { data: jsonData });
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <FormControl width="50%">
          <FormLabel>Upload File</FormLabel>
          <Input type="file" accept=".json" onChange={handleOnChange} />
          <Button type="submit">Upload</Button>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
