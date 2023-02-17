import React, { useState } from "react";
import axios from "axios";
import { FormControl, Button, Box, Flex, Input, Text } from "@chakra-ui/react";

const URL = "http://localhost:5000/";

function App() {
  const [file, setFile] = useState();
  let inputRef;

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(inputRef.files[0]);
    console.log(inputRef.files[0]);
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
    <Box>
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <Flex alignItems="center ">
            <Input
              onChange={handleOnChange}
              accept=".json"
              type="file"
              hidden={true}
              ref={(refParam) => (inputRef = refParam)}
            />
            <Button
              onClick={() => inputRef.click()}
              colorScheme="orange"
              mr="1rem"
            >
              Choose File
            </Button>
            <Text mr="1rem">{file !== undefined ? file.name : null}</Text>
            <Button type="submit">Upload</Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}

export default App;
