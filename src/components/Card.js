import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Stack,
  MenuItem,
  Select,
  FormControl,
  Divider,
  Paper,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function Card() {
  const [text, setText] = useState("");
  const [selectedValue, setSelectedValue] = useState("Curated");
  const [selectedValue1, setSelectedValue1] = useState("Friendly");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, handleshowresult] = useState("");

  let str;

  const paperStyle = {
    padding: 50,
    boxShadow: "0 4px 6px red",
  };
  const preStyle = {
    whiteSpace: "pre-wrap",
  };

  const maxCharacters = 500;
  const handleTextChange = (event) => {
    event.preventDefault();
    const inputText = event.target.value;
    if (inputText.length <= maxCharacters) {
      setText(inputText);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSelectChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };

  const handleResult = () => {
    if (text.trim() === "") {
      setError("Field cannot be empty");
    } else {
      setError("");
    }
    str = `${text} + ${selectedValue} + ${selectedValue1}`;
    console.log(selectedValue, selectedValue1, text);
    generateArticleWithAI();
  };

  const generateArticleWithAI = async () => {
    setIsGenerating(true);

    try {
      const prompt = `Generate a  ${selectedValue} letter for  ${text} in  ${selectedValue1} tone`;
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
        model: "gpt-3.5-turbo",
      });
      const description = completion.choices[0].message.content;
      console.log(description);
      handleshowresult(description);
    } catch (error) {
      console.error("Error generating description:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    const textToSave = result;
    localStorage.setItem("savedText", textToSave);
    console.log("Text saved:", textToSave);
  };

  const handleCopy = () => {
    const textToCopy = result;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied:", textToCopy);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  return (
    <Box
      style={{
        display: "flex",
        border: "1px solid gray",
        overflowY: "hidden",
        boxShadow: "0 4px 6px gray",
        backgroundColor: "white",
      }}
    >
      <Box style={{ flex: 1, padding: "30px", overflowY: "hidden" }}>
        <Typography variant="h3">Letter Generator</Typography>
        <Typography
          variant="h6"
          style={{ color: "gray", paddingBottom: "10px" }}
        >
          Generate Personalized and professional letters
        </Typography>
        <Box style={{ position: "relative" }}>
          <Typography variant="h6">Describe your letter *</Typography>
          <TextField
            id="multiline"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            onChange={handleTextChange}
            value={text}
            error={!!error}
            helperText={error}
          />
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              bottom: "8px",
              right: "8px",
            }}
          >
            {text.length}/{maxCharacters}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <Stack
            direction="column"
            sx={{ flexGrow: 1, marginRight: 2, marginTop: "20px" }}
          >
            <Typography style={{ marginBottom: "4px" }}>
              Article Type
            </Typography>
            <FormControl>
              <Select
                labelId="type-select-label"
                id="type-select"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <MenuItem value="Curated"> Curated</MenuItem>
                <MenuItem value="Neutral"> Neutral</MenuItem>
                <MenuItem value="Listicle"> Listicle</MenuItem>
                <MenuItem value="Fun"> Fun</MenuItem>
                <MenuItem value="What"> What</MenuItem>
                <MenuItem value="Why"> Why</MenuItem>
                <MenuItem value="FAQ"> FAQ</MenuItem>
                <MenuItem value="Comparsion"> Comparsion</MenuItem>
                <MenuItem value="How to"> How to</MenuItem>
                <MenuItem value="Feature"> Feature</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack
            direction="column"
            sx={{ flexGrow: 1, marginRight: 2, marginTop: "20px" }}
          >
            <Typography style={{ marginBottom: "4px" }}> Tone </Typography>
            <FormControl>
              <Select
                labelId="tone-select-label"
                id="tone-select"
                value={selectedValue1}
                onChange={handleSelectChange1}
              >
                <MenuItem value="Neutral">Neutral</MenuItem>
                <MenuItem value="Informal">Informal</MenuItem>
                <MenuItem value="Friendly">Friendly</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
                <MenuItem value="Uplifting">Uplifting</MenuItem>
                <MenuItem value="Humble">Humble</MenuItem>
                <MenuItem value="Postive">Postive</MenuItem>
                <MenuItem value="Inspiring">Inspiring</MenuItem>
                <MenuItem value="Bold">Bold</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Button
          variant="contained"
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "24px",
            borderRadius: "12px",
            padding: "12px",
          }}
          onClick={handleResult}
          disabled={isGenerating}
        >
          Generate Article
        </Button>
      </Box>
      <Divider orientation="vertical" color="red" />
      <Box style={{ flex: 1, padding: "20px" }}>
        <Box>
          <Typography variant="h4">Result</Typography>
          <Paper elevation={3} style={paperStyle}>
            <pre style={preStyle}>{result}</pre>
            {/* <pre style={preStyle}>
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
              lorem23 setSelectedValueds d savedd setSelectedValuedsds
              dangerouslyAllowBrowsers ere reacter
              console.log('here');console.log('here');console.log('here');console.log('here');
            </pre> */}
          </Paper>
        </Box>
        <Stack direction="row" style={{ paddingTop: "10px" }}>
          <Button
            style={{ paddingTop: "12px", marginLeft: "12px" }}
            startIcon={<SaveIcon />}
            onClick={handleSave}
            variant="contained"
          >
            Save
          </Button>
          <Button
            style={{ paddingTop: "12px", marginLeft: "12px" }}
            startIcon={<FileCopyIcon />}
            onClick={handleCopy}
            variant="contained"
          >
            Copy
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
