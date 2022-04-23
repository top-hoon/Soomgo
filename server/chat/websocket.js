const webSocket = ({ ledsOb, io}) => {
  return function socket(info){
    io.on("connection", (socket)=>{
      console.log("Someone has connected");

      socket.on("1", async (data) =>{
      });

      socket.on("0", async (data)=>{
      });

      socket.on("manual", async (data)=>{
      });

      io.emit("getStatus");

      socket.on("logs", async (data)=>{

      });
    });
  }
}

module.exports = webSocket;


