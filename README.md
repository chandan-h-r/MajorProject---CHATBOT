# Chatbot Deployment with Flask, JavaScript, HTML and CSS.

This Project is to deploy the chatbot in the college websites, I created this with the help of Flask, JavaScript, HTML and CSS.

                                                    _______________________________________
                                                    | This is how to deploy the chatBot :- |
                                                    ```````````````````````````````````````

## Initial Setup:
This Folder currently contains the Project files.

_______________________
| Install dependencies |
```````````````````````
$ (venv) pip install Flask torch torchvision nltk
```
_______________________
| Install nltk package |
```````````````````````
$ (venv) python
>>> import nltk
>>> nltk.download('punkt')
```
We can Modify `intents.json` with different intents, tages and responses for the [ CHATBOT DATA STORAGE ].
____________________________________________________
| Run this to train and test the chatbot in console |
````````````````````````````````````````````````````
$ (venv) python train.py
```
This will dump data.pth file. And then run the following command to test it in the console.
```
$ (venv) python chat.py
```
____________________________
| How to run in the website |
````````````````````````````
Now for deployment we need to run the `app.py` in respective flask-cor server, which will be running in the background.
Then to run the frontend separately, we need to run the HTML website page sepratelly to run the chatBot.
