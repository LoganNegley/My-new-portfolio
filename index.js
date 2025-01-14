require('dotenv').config();

const server = require('./server');

const PORT = process.env.PORT || 3000;

if(!module.parent){
    server.listen(PORT, ()=>{
        console.log(`\n=== Server listening on port ${PORT} ===\n`)
    });
};
