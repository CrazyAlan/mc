### Running Localy
Step 1: Install Nodejs https://nodejs.org/en/

Step 2: Go to folder path/to/mc/, run sudo npm install

Step 3: install nodemon,  npm install -g nodemon

Step 4: nodemon bin/www, then go to web: http://127.0.0.1:3000

### Push to github once finished modifying 

### Runing on AWS
Using key maichen.pem in this folder

running command:
Step 1: ssh -i "maichen.pem" ubuntu@ec2-35-182-145-146.ca-central-1.compute.amazonaws.com

once you are on aws, attach to tmux sesssion
Step 2: ```tmux a  -t web```

Stop the running server:
Step 3: ```forever stopall```

Pull latest code:
Step 4: ```git pull```

Running server again
Step 5: ```forever start bin/www```



### Folder stucture:
HTML file are under /mc/views
Images file are under /mc/public/local_assets
CSS file are under /mc/public/local_assets/css



