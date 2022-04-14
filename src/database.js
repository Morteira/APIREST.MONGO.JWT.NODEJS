import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/companydb")
    .then(db => console.log("conectado"))
    .catch(error => console.log(error))