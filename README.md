
# Client - Server Project

Client will be streaming collection of data. My server will be listening to it. It will draw a diagram by using that x,y cordinates.

# Commands

1. Connect to the client-server aws instance. 

```ssh -i "node-client.pem" ubuntu@ec2-3-85-165-234.compute-1.amazonaws.com```

2. Go to the  client server folder

```cd xy-cordinates/```

3. Run the client-server.js file.

```node client-server.js ```

<img width="911" alt="Screenshot 2023-05-30 at 16 03 17" src="https://github.com/pramodaya/xy-cordinates/assets/19555470/3b135cf9-e350-4812-8e0a-302f5d9281ce">

This will run the server on port 8080 and see the result from this url

http://3.85.165.234:8080/random-coordinates

4. Connect to the server aws instance

```ssh -i "node-client.pem" ubuntu@ec2-3-89-123-236.compute-1.amazonaws.com```

5.Go to the  client server folder

```cd xy-cordinates/```

6.Run the node server-nodb.js file.

```node server-nodb.js ```

<img width="807" alt="Screenshot 2023-05-30 at 16 03 42" src="https://github.com/pramodaya/xy-cordinates/assets/19555470/61800055-b66a-4ede-9aed-a36534f18245">

This will run the server on port 3000 and see the result from this url

http://3.89.123.236:3000/


7. Copy http://3.85.165.234:8080/random-coordinates and paste it in the server-nodb.js file if it was changed and push it to the server as follows.
```scp -i /Users/pramodaya/Desktop/project/node-client.pem    server-nodb.js ubuntu@ec2-3-89-123-236.compute-1.amazonaws.com:/home/ubuntu/xy-cordinates```

<img width="1679" alt="Screenshot 2023-05-30 at 16 03 52" src="https://github.com/pramodaya/xy-cordinates/assets/19555470/c27b2e9d-a0e1-4b26-8182-1fb3433d0f7c">


## Demo


![Screen Recording 2023-05-30 at 15 32 58](https://github.com/pramodaya/xy-cordinates/assets/19555470/51aced59-39b0-4203-a399-11e2b984a5b8)




