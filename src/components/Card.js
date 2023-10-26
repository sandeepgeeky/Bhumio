import React from "react";
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

function Card() {
  return (
    <Box
      style={{
        display: "flex",
        border: "2px solid gray",
        height: "490px",
      }}
    >
      <Box style={{ flex: 1, padding: "30px" }}>
        <Typography variant="h3">Letter Generator</Typography>
        <Typography
          variant="h6"
          style={{ color: "gray", paddingBottom: "10px" }}
        >
          Generate Personalized and professional letters
        </Typography>
        <Typography variant="h6">Describe your letter *</Typography>
        <TextField
          id="multiline"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <Typography variant="h6">123/500</Typography>
        <Box style={{ display: "flex" }}>
          <Stack direction="column" sx={{ flexGrow: 1, marginRight: 2 }}>
            <Typography>Article Type </Typography>
            <FormControl>
              <Select labelId="type-select-label" id="type-select">
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
                <MenuItem value="option3">Option 3</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="column" sx={{ flexGrow: 1, marginRight: 2 }}>
            <Typography> Tone </Typography>
            <FormControl>
              <Select labelId="tone-select-label" id="tone-select">
                <MenuItem value="tone1">Tone 1</MenuItem>
                <MenuItem value="tone2">Tone 2</MenuItem>
                <MenuItem value="tone3">Tone 3</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Box>
        <Button
          variant="contained"
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "12px",
            borderRadius: "12px",
            padding: "12px",
          }}
        >
          Generate Article
        </Button>
      </Box>
      <Divider orientation="vertical" color="gray" />
      <Box style={{ flex: 1, padding: "30px" }}>
        <Box>
          <Typography variant="h4">Result</Typography>
          <Paper elevation={3} style={{ padding: 180 }}></Paper>
        </Box>
        <Stack direction="row">
          <Button startIcon={<SaveIcon />}>Save</Button>
          <Button startIcon={<FileCopyIcon />}>Copy</Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
