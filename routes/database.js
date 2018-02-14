const StitchClientFactory = require('mongodb-stitch')

exports.dbconnection = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let appId = 'mz02test-vijbf'
    let stitchClientPromise = StitchClientFactory.StitchClientFactory.create(appId)
    stitchClientPromise.then(client => {
        let db = client.service('mongodb', 'mongodb-atlas').db('mz02test')
        let item = db.collection('Users')
        console.log(item.db.client)
        res.send('Database Connection successfull')
      }).then(result => {
        console.log('success: ', result)
      })
    .catch(e => {
      console.log('error: ', e)
      res.send(e)
    })

}
