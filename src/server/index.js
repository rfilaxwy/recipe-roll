const   bodyParser  =   require('bodyparser'),
        cors        =   require('cors'),
        express     =   require('express'),
        massive     =   require('massive');

const   app         =   express();

app.use(bodyParser);
app.use(cors);

//Chain promies for getting lists of common ingrdients for drop downs 
