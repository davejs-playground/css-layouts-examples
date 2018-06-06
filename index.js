const express = require('express');
const app = express();



app.get('/:char', (req, res) => {
  console.log(req.params.char);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
