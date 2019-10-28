# docker-demo
Demo For Docker

Goal: Start a basic container from an Ubuntu image.

You'll be dropped into an interactive Ubuntu container running /bin/bash.

#Exercises

1. Run ls to see what's on the file system<br>
2. Run mkdir /foo to make a new folder at the root of the container<br>
3. On the Host run docker ps and see the running container<br>
4. On the container run exit to stop the process and shutdown the container<br>
5. On the Host run docker ps and see the container isn't listed, add a --all flag to see the stopped container<br>
6. On the Host run docker start <container id> to start the container<br>
7. On the Host run docker attach <container id> to connect back into the container<br>
8. On the container run ls / and see that the /foo folder is still there<br>


#Step 2 - Multiple containers from the same image
Goal: Start multiple containers that run in isolation of each other, and will remove themselves when stopped.<br>
<br>
You'll start three containers, ubuntu1, ubuntu2 and ubuntu3, all detached.<br>
<br>
#Exercises
1. Start three terminals and run docker attach ubuntu1/2/3 in each to connect to each container<br>
2. Pick a container and run mkdir /foo on it<br>
3. On a different container run ls, the /foo directory won't exist<br>
4. On the Host run docker stop ubuntu2<br>
5. On the Host run docker ps --all and ubuntu2 is no longer listed<br>
