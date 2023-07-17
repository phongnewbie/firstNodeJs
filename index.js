const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
    var a = 3
    var b = 7
    var c = a + b;
    console.log(c);

    return res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})