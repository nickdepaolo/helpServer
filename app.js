const Express = require('express');
const dbConnection = require('./db')
const app = Express();
const controllers = require('./controllers');

app.use(Express.json());


app.use('/user', controllers.userController);
app.use('/help', controllers.helpController);
app.use('/archive', controllers.archiveController);


dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(3000, () => {
            console.log(`[Server]: App is listening on 3000`)
        });
    })
    .catch((err) => {
        console.log(`[Server]: Server crashed. Error = ${err}`);
    });