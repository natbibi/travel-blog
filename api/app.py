from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mail import Mail, Message
from controllers import users

app = Flask(__name__)

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

    return jsonify(resp), code

if __name__ == '__main__':
    create_app()