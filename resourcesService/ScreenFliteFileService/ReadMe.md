# Instructions to run the Resource Service
- open a terminal in this directory
- run :
    docker build -t "res_service" .
    -> NB: don't forget the '.' at the end of the command
    docker run -it -p 5000:5000 -p 5001:5001 res_service:latest

To test if the service is running, go to your browser and navigate to :
-> https://localhost:5000/api/values
-> If your browser complains about https certificates (on Chrome) then (Select advanced and bypass this check)
You should see a message stating: __API Up and Running perfectly !!!__

You are done.