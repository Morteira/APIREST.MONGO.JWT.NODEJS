import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import productsRoutes from  '../src/routes/products.routes'
import authRoutes from '../src/routes/auth.routes'
import {createRoles} from './libs/initialSetup'

const app = express()
createRoles()

app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())


app.get('/', (req, res) => {
   res.json({
       author: app.get('pkg').name,
       name: app.get('pkg').name,
       version: app.get('pkg').version,
       description: app.get('pkg').description,
   })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)

export default app;


