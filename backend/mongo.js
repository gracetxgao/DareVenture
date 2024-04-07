const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://gracetxgao:${password}@cluster0.syarjah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const imageSchema = new mongoose.Schema({
    uri: {
      type: String,
      required: true
    }
  });

const Image = mongoose.model('Image', imageSchema)

if (process.argv.length === 3) { // node mongo.js password
  console.log('images:');
  Image
    .find({})
    .then(result => {
      result.forEach(image => {
        const uri = image.uri
        console.log(uri);
      })
      mongoose.connection.close()
    })
} else if (process.argv.length === 4) { // node mongo.js password uri
    const uri = process.argv[3]
    const image = new Image({
      uri: uri,
    })
    image.save().then(result => {
      console.log(`added ${uri} to images`);
      mongoose.connection.close()
    })
} else {
  console.log('unknown input');
  process.exit(1)
}