const express = require('express');
const app = express();
var http = require('http').Server(app);
var s = app.listen(3000, () => console.log('Server is listening on port 3000!'));

var io = require('socket.io').listen(s);


app.get('/', (req, res) => res.send('Server is running!'))

//for accessing from angular service this function is required with these four setHeaders
app.use(function(req, res, next) {
  
    // // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // // Pass to next layer of middleware
    next();
  });
    
  
    users = [];
    
    io.sockets.on('connection', function(socket) {
      
      console.log('A user connected');
      console.log('Socket ID:', socket.id);
      
      socket.on('NewUser', function(data) {
        var onlineClients = {
          username: data.user,
          // socketid: socket.id
        };

        //     // console.log(data);
      // onlineClients[data.user] = socket.id;
      if(users.indexOf(data) > -1) 
      {
        console.log('user already exists');
        console.log(users[0]);
        socket.emit('userExists', data + ' username is taken! Try some other username.');
      }
      else 
      { 
            if (data.user && data.user !== undefined)
             {
                    users.push(data);
                    console.log(data.user + ' is registered successfully ');
                    // console.log('Socket ID: ',socket.id);
                    socket.broadcast.emit('new user joined', {user:data.user, message:' has joined the chat.'});
                    data.user=socket.id;
                    // console.log('User Socket ID: ',data.user);
             }
      }
            
   });
   
   var socketid;
   socket.on('getsocketid', function(data){
      
    socketid=data;
      
      console.log('get socked ID',socketid);
   });
   socket.on('message',function(data){
    if (data.user && data.user !== undefined) {
        
      if(socketid === undefined || socketid === "community")
      {
        
        console.log('socket id is ',socketid);
        
        io.emit('new message', {user:data.user, message:data.message});
      }
      else
      {
        console.log('socket id is ',socketid);
        
        io.to(socketid).emit('new message', {message:'--- Private Message ---'});
        io.to(socketid).emit('new message', {user:data.user, message:data.message});
        
        io.to(socket.id).emit('new message', {message:'--- Private Message ---'});
        io.to(socket.id).emit('new message', {user:data.user, message:data.message});
      }
    }
   });

 

  socket.on('userlist',function(data){

    // io.emit('new user', {user:data.user});
    socket.broadcast.emit('new user', {user:data.user});
    socket.broadcast.emit('new user', {user:socket.id});
  

   });

   

  //  socket.on('disconnect', function(){
  //    users = users.filter(function(item){
  //      return item.data.user !== socket.data.user
  //    });
  //    io.emit('all-users')
  //  })
  socket.on('disconnect', function (data) {
    console.log('Got disconnect!');

    // io.sockets.emit('user disconnected');
    // socket.broadcast.emit('disconnected', {user:data.user, message:' user is disconnected.'});
  });
  

});



// app.listen(3000, () => console.log('Server is listening on port 3000!'));
