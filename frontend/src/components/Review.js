import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  GridItem,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Chart from "./Chart";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { firstGraph, secondGraph } from "../utils/graphCalculation";

function Review() {
  let { id } = useParams();
  const [reviewData, setReviewData] = useState();

  const URL = `http://localhost:5000/reviews/get_review/${id}`;
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setReviewData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sentiment_map = {
    clearly_positive: "Clearly Positive",
    clearly_negative: "Clearly Negative",
    mixed: "Mixed",
    neutral: "Neutral",
    positive: "Positive",
    negative: "Negative",
  };

  console.log(reviewData);
  if (reviewData === undefined) return <div>Loading</div>;

  const firstGraphData = firstGraph(reviewData.review.sentiments.entities);
  const secondGraphData = secondGraph(reviewData.review.sentiments.entities);

  const entityList = reviewData.review.sentiments.entities.sort((a, b) => {
    if (a.score < b.score) return -1;
    if (a.score > b.score) return 1;
    return 0;
  });

  function checkRatingMatch() {
    const sentiment = reviewData.review.sentiments.sentiment;
    if (
      (sentiment === "negative" || sentiment === "clearly_negative") &&
      reviewData.review.rating >= 3
    ) {
      return false;
    }
    if (
      (sentiment === "positive" || sentiment === "clearly_positive") &&
      reviewData.review.rating < 3
    ) {
      return false;
    }
    return true;
  }

  return (
    <Box>
      <Navbar />
      <Flex mt="3rem" justify="center" mb="4rem">
        <Box borderRadius="md" p="2rem" w="70%" border="1px solid black">
          <HStack align="top">
            <Text fontSize="1.2rem" fontWeight="700">
              Review:
            </Text>
            <Text mb="1">
              {reviewData.review.sentiments.sentences.map((sentence) => {
                if (sentence.sentiment === "clearly_positive")
                  return (
                    <span style={{ background: "green", color: "white" }}>
                      {sentence.content}
                    </span>
                  );
                else if (sentence.sentiment === "clearly_negative")
                  return (
                    <span style={{ background: "red", color: "white" }}>
                      {sentence.content}
                    </span>
                  );
                else if (sentence.sentiment === "negative")
                  return (
                    <span style={{ background: "#ed6464" }}>
                      {sentence.content}
                    </span>
                  );
                else if (sentence.sentiment === "positive")
                  return (
                    <span style={{ background: "#96f593" }}>
                      {sentence.content}
                    </span>
                  );
                else if (sentence.sentiment === "mixed")
                  return (
                    <span style={{ background: "#ffed9c" }}>
                      {sentence.content}
                    </span>
                  );
                else return <span>{sentence.content}</span>;
              })}
            </Text>
          </HStack>

          <HStack m="3rem" justify="center">
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                User Rating
              </Text>
              <Text fontSize="1.1rem">{reviewData.review.rating} / 5</Text>
            </Box>
            <Box boxShadow="base" p="4" borderRadius="md">
              <Text fontSize="1.5rem" fontWeight="700">
                Predicted Sentiment
              </Text>
              <Text fontSize="1.1rem">
                {sentiment_map[reviewData.review.sentiments.sentiment]}
              </Text>
            </Box>
          </HStack>
          {checkRatingMatch() ? null : (
            <Alert borderRadius="md" mb="2rem" status="error" mt="1rem">
              <AlertIcon />
              <AlertTitle>Rating Mismatch</AlertTitle>
              <AlertDescription>
                Perhaps the user has given unintentional rating since rating and
                our Predicted sentiment doesn't match
              </AlertDescription>
            </Alert>
          )}

          <Flex align="center" mb="3rem">
            <Heading fontSize="1.2rem">Legends:</Heading>
            <HStack ml="1rem" mb="2">
              <Box h={10} w={10} bg="green"></Box>
              <Box>Strong Positive</Box>
            </HStack>
            <HStack ml="1rem" mb="2">
              <Box h={10} w={10} bg="red"></Box>
              <Box>Strong Negative</Box>
            </HStack>
            <HStack ml="1rem" mb="2">
              <Box h={10} w={10} bg="#96f593"></Box>
              <Box>Positive</Box>
            </HStack>
            <HStack ml="1rem" mb="2">
              <Box h={10} w={10} bg="#ed6464"></Box>
              <Box>Negative</Box>
            </HStack>
            <HStack ml="1rem" mb="2">
              <Box h={10} w={10} bg="#ffed9c"></Box>
              <Box>Mixed</Box>
            </HStack>
          </Flex>
          <hr style={{ marginBottom: "1rem" }} />
          <Chart
            label="review"
            xTitle="Sentiments"
            yTitle="Score"
            labels={Object.keys(firstGraphData)}
            chartData={Object.values(firstGraphData)}
          />
          <hr style={{ marginTop: "1rem", marginBottom: "1rem" }} />
          <Chart
            label="review"
            yTitle="Entity"
            xTitle="Sentiments"
            labels={Object.keys(secondGraphData)}
            chartData={Object.values(secondGraphData)}
          />
          <Heading>Entities</Heading>
          <Flex wrap="wrap ">
            {entityList.map((entity) => (
              <Box w="200px" m="1rem" boxShadow="md" p="1rem">
                <Text>
                  <strong>Name:</strong> {entity.name}
                </Text>
                <Text>
                  <strong>Score:</strong> {entity.score}
                </Text>
                <Text>
                  <strong>Magnitude:</strong> {entity.magnitude}
                </Text>
                <Text>
                  <strong>Type:</strong> {entity.entity}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Review;
