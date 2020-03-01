const express = require('express');

 var app = express();
 app.use(express.static(__dirname));
 app.get('/', (req, res) =>{
   res.send('Hello there')
 });


app.listen(3000, () =>{
  console.log('server is up on port 3000')
});
