const path = require('path')
const express = require('express')
const vhost = require('vhost')

const app = express()
const PORT = process.env.port || 3000

/*
* WHY: to simulate multiple domains for verifying 3rd-party-scrip in a different-domain test-page
* NOTE: remember to add these domains to "hosts" file to enable local dev, as bellow:
* 127.0.0.1 test-page.com
* 127.0.0.1 3rd-party-app.com
*/
app.use(vhost('test-page.com', (req, res) => res.sendFile(path.resolve(__dirname, './test.html'))))
app.use(vhost('3rd-party-app.com', express.static(path.resolve(__dirname, './app'))))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
