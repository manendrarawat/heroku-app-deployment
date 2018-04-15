const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, index.html));
})


app.listen(port, function(){
    console.log('App is running on port : '+port)
});

console.log('Server started sucessfully');