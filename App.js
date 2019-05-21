const express = require('express');
const app = express();

app.get("/api/timestamp/:date_string?", (req, res) => {
  const dateString = req.params.date_string;
  if(dateString) {
    
  }
});