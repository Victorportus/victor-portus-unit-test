const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const dbURI =
'mongodb+srv://VictorClass:SFFAD8JjukcCyAkV@fullclass.krtybxv.mongodb.net/';

;
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});