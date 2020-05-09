import express from 'express';
import morgan from 'morgan';
import usersRoutes from './routes/user.routes';
import mysql from 'mysql';
const app = express();

// move this to .env
var con = mysql.createConnection({
    host: "176.222.224.212",
    user: "moja",
    password: "4Th,u8U(*]ygE~7G",
    database: "stromy"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

con.query('SELECT * FROM test', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:');
    console.log(rows);
});






app.use(morgan('dev'))

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//ROUTES
app.use("/users", usersRoutes);


// ERRORS
interface ResponseError extends Error {
    status?: number;
}

app.use((req: express.Request, res: express.Response, next: express.NextFunction) =>{
    const error = new Error('Not found') as ResponseError;
    error.status = 404;
    next(error);
})

app.use((error: ResponseError, req: express.Request, res: any, next: express.NextFunction) => {  // other errors
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    })
})
  
  export = app;