
# Client - Server Project

Client will be streaming collection of data. My server will be listening to it. It will draw a diagram by using that x,y cordinates.

# Commands

1. Connect to the client-server aws instance. 

```ssh -i "node-client.pem" ubuntu@ec2-3-85-165-234.compute-1.amazonaws.com```

2. Go to the  client server folder

```cd xy-cordinates/```

3. Run the client-server.js file.

```node client-server.js ```

This will run the server on port 8080 and see the result from this url

http://3.85.165.234:8080/random-coordinates

4. Connect to the server aws instance

```ssh -i "node-client.pem" ubuntu@ec2-3-89-123-236.compute-1.amazonaws.com```

5.Go to the  client server folder

```cd xy-cordinates/```

6.Run the node server-nodb.js file.

```node server-nodb.js ```

This will run the server on port 3000 and see the result from this url

http://3.89.123.236:3000/


## Demo


![Screen Recording 2023-05-30 at 15 32 58](https://github.com/pramodaya/xy-cordinates/assets/19555470/51aced59-39b0-4203-a399-11e2b984a5b8)
