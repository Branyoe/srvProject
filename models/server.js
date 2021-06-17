const express = require('express');

class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.middleware();
  }
  
  ecuchar(){
    this.app.listen(this.port, ()=>{
      console.log('Server on port ' + this.port);
    })
  }

  middleware(){
    this.app.use('/', express.static('public'));
  }
}

module.exports = Server;