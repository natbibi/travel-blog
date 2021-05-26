from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
from controllers import users

import os
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

app = Flask(__name__)

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("MAIL_USERNAME"),
    "MAIL_PASSWORD": os.getenv("MAIL_PASSWORD"),
    "MAIL_DEFAULT_SENDER": os.getenv("MAIL_USERNAME"),

    # suppress mail sending during dev
    "MAIL_SUPPRESS_SEND": True
}

app.config.update(mail_settings)
mail = Mail(app)


CORS(app)
    
@app.route('/')
def welcome():
    return "Welcome to Flask backend for Natalie's Travel blog!"

if __name__ == '__main__':
    app.run(debug=true)

@app.route('/mailinglist', methods=['GET', 'POST'])
def users_handler():
    fns = {
        'GET': users.index,
        'POST': users.create
    }
    resp, code = fns[request.method](request)
    if request.method == 'POST':
        msg = Message('HEY WELCOME FRIEND 💖', recipients=[resp["email"]])
        msg.body = f"Thank you for joining the mailing list, {resp['name']}!"
        mail.send(msg)
    return jsonify(resp), code
