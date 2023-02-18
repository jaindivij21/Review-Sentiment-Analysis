import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Button,
  Box,
  Flex,
  Input,
  Text,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/reviews/upload_reviews";

function App() {
  const [file, setFile] = useState();
  const [customReview, setCustomReview] = useState({
    content: "",
    rating: 0,
  });
  const navigate = useNavigate();

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
        navigate(`/dashboard`);
      };

      fileReader.readAsText(file);
    } else {
      const { data } = await axios.post(URL, {
        data: JSON.stringify([
          {
            "Review Content": customReview.content,
            Rating: customReview.rating,
          },
        ]),
      });
      navigate(`/review/${data.reviews[0]}`);
    }
  };

  return (
    <Box w="100%">
      <form onSubmit={handleOnSubmit}>
        <FormControl>
          <Flex w="100%" direction="column" alignItems="center ">
            <Input
              onChange={handleOnChange}
              accept=".json"
              type="file"
              hidden={true}
              ref={(refParam) => (inputRef = refParam)}
            />
            <Button
              mb="2"
              onClick={() => inputRef.click()}
              colorScheme="orange"
              mr="1rem"
            >
              Choose File
            </Button>
            <Text mr="1rem">{file !== undefined ? file.name : null}</Text>
            <p>or</p>
            <Textarea
              value={customReview.content}
              onChange={(e) =>
                setCustomReview({ ...customReview, content: e.target.value })
              }
              w="50%"
              mt="2"
              mb="2"
            />
            <Flex alignItems="center">
              <FormLabel>Rating: </FormLabel>
              <Input
                onChange={(e) =>
                  setCustomReview({ ...customReview, rating: e.target.value })
                }
                mb="2"
                type="number"
                w="100%"
                min={1}
                max={5}
                value={customReview.rating}
              />
            </Flex>
            <Button type="submit">Upload</Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}

export default App;
