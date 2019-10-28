# docker-demo
Demo For Docker

Goal: Start a basic container from an Ubuntu image.

You'll be dropped into an interactive Ubuntu container running /bin/bash.

#Exercises
Run ls to see what's on the file system
Run mkdir /foo to make a new folder at the root of the container
On the Host run docker ps and see the running container
On the container run exit to stop the process and shutdown the container
On the Host run docker ps and see the container isn't listed, add a --all flag to see the stopped container
On the Host run docker start <container id> to start the container
On the Host run docker attach <container id> to connect back into the container
On the container run ls / and see that the /foo folder is still there
Step 2 - Multiple containers from the same image
Goal: Start multiple containers that run in isolation of each other, and will remove themselves when stopped.

You'll start three containers, ubuntu1, ubuntu2 and ubuntu3, all detached.

#Exercises
Start three terminals and run docker attach ubuntu1/2/3 in each to connect to each container
Pick a container and run mkdir /foo on it
On a different container run ls, the /foo directory won't exist
On the Host run docker stop ubuntu2
On the Host run docker ps --all and ubuntu2 is no longer listed
