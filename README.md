# docker-demo
Demo For Docker<br>

Goal: Start a basic container from an Ubuntu image.<br>

You'll be dropped into an interactive Ubuntu container running /bin/bash.

#Exercises<br><br>

1. Run ls to see what's on the file system<br>
2. Run mkdir /foo to make a new folder at the root of the container<br>
3. On the Host run `docker ps` and see the running container<br>
4. On the container run exit to stop the process and shutdown the container<br>
5. On the Host run `docker ps` and see the container isn't listed, add a --all flag to see the stopped container<br>
6. On the Host run `docker start <container id>` to start the container<br>
7. On the Host run `docker attach <container id>` to connect back into the container<br>
8. On the container run ls / and see that the /foo folder is still there<br>


#Step 2 - Multiple containers from the same image<br>
Goal: Start multiple containers that run in isolation of each other, and will remove themselves when stopped.<br>
<br>
You'll start three containers, ubuntu1, ubuntu2 and ubuntu3, all detached.<br>
<br>
#Exercises<br>
1. Start three terminals and run docker attach ubuntu1/2/3 in each to connect to each container<br>
2. Pick a container and run mkdir /foo on it<br>
3. On a different container run ls, the /foo directory won't exist<br>
4. On the Host run `docker stop ubuntu2`<br>
5. On the Host run `docker ps --all` and ubuntu2 is no longer listed<br>

#Step 3 - Single process containers<br>
Goal: Run a single process in a container<br><br>

Exercises<br>
Note: You're dropped into a Node.js REPL, not /bin/bash.<br>

Run `console.log('Hello World');<br>`
Run 
```const fs = require('fs'); 
fs.readdir('/', (err, paths) => console.log(paths)); 
``` 
and see the file system info<br>

#Step 4 - Tagging Docker Images<br>
Goal: Create Tags to our Images<br><br>

Exercises<br>
1. Create a tag to an existing image and run docker images to see the new image with tag
`docker tag <<oldimage>> <<username>>/<imagename>>:<<tag>>`

#Step 5 - Creating a Docker Images from Running Container<br>
Goal: Create a new docker image from a running container<br><br>

Exercises<br>
1. Run a container in detached mode `docker run -it -d ubuntu`<br>
2.See If the container is running by using this command `docker ps`<br>
3.Get into that container `docker exec -it <<containername>> /bin/bash`<br>
4.Make some changes inside the container like adding a folder and txt file and also install vim editor<br>

```
mkdir pavan
touch pavan.txt

apt-get update
apt-get install vim 

vi pavan.txt
```
5. Exit from the container by running exit command<br>
6. Now create a new image from that container<br>

```
docker commit -m <<message>> <<conatainername>> <<newimagename>>:<<some versionnumber>>
```

#Step 5 - Pushing Images to Docker hub<br>
Goal: Push our images to docker hub and then pull them on someother machine<br><br>

Exercises<br>
1. Create a new tag from the image created in above step
```
docker tag <<oldimagename>>:<<version>> <<dockerhub_username>>/<<newimagename>>:<<tag>>
```
2. Create an account with https://hub.docker.com and Login to docker hub from terminal `docker login`
3. Push the image created in the above point `docker push <<dockerhub_username>>/<<newimagename>>:<<tag>>`
4. Now Login to Docker hub and the see that there is an image created in the repository
5. Login into someother machine and try to do `docker run -it <<dockerhub_username>>/<<newimagename>>:<<tag>>`
6. Now you'll be able to see the folder created and vim installed in Step 5.

