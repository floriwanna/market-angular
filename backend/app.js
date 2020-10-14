const express = require('express');

  function App(db,secret){
    let app = express();

    app.get('/',(req,res,next)=>{
        res.write('Hi there!')
        res.end();
    });

    return app;
}
module.exports = App;