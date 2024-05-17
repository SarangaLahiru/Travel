from flask import Flask, jsonify, request, redirect, session
import requests
from flask_cors import CORS, cross_origin
from pymongo import MongoClient
import re
import pytesseract
from PIL import Image
import re
import bcrypt
from vonage import Client, Sms

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# client = Client(key="5e68450e", secret="CX3mEEXHz1cIzQZn")
client = Client(key="b7faa0b9", secret="zi6PY2HKl3wL5zAu") 
sms = Sms(client)

client = MongoClient('mongodb://localhost:27017/')
db = client['usersdb']
users_collection = db['users']  # Assuming you have a collection named 'users'
contacts_collection = db['contacts'] # Have a collection named contacts

def validate_password(password):
     # At least one uppercase letter
    if not re.search(r'[A-Z]', password):
        return "Password must contain at least one uppercase letter."
    
    # At least one lowercase letter
    if not re.search(r'[a-z]', password):
        return "Password must contain at least one lowercase letter."
    
    # At least one digit
    if not re.search(r'\d', password):
        return "Password must contain at least one digit."
    
    # At least one special character
    if not re.search(r'[^a-zA-Z0-9]', password):
        return "Password must contain at least one special character."
    
    # Minimum length of 8 characters
    if len(password) < 8:
        return "Password must be at least 8 characters long."
    
    return True  # Password is valid
    


@app.route('/api/signup', methods=['POST'])
def signup():
    user_data = request.json
    
    
    required_fields = ['name', 'id', 'email', 'password', 'confirmPassword']
    # Validation
    for field in required_fields:
      if field not in user_data or not user_data[field]:
        return jsonify({'error': f'Missing required field: {field}'}), 400
    
    # Check if the email is already registered
    if users_collection.find_one({'email': user_data['email']}):
        return jsonify({'error': 'Email already exists'}), 400
    
    if users_collection.find_one({'id': user_data['id']}):
        return jsonify({'error': 'National ID card already used'}), 400
    
    # Check if passwords match
    if user_data['password'] != user_data['confirmPassword']:
        return jsonify({'error': 'Passwords do not match'}), 400
    
    password_validation_result = validate_password(user_data.get('password'))
    if password_validation_result is not True:
        return jsonify({'error': password_validation_result}), 400
    
     # Hash the password
    hashed_password = bcrypt.hashpw(user_data['password'].encode('utf-8'), bcrypt.gensalt())
    user_data['password'] = hashed_password.decode('utf-8')
    
    
    # Insert user data into MongoDB
    users_collection.insert_one(user_data)
    
    return jsonify({'message': 'User signed up successfully',
                     'user': {
            'id': user_data['id'],
            'name': user_data['name'],
            'email': user_data['email']
            # Add more user data fields as needed
        }
                    
                    }), 201


@app.route('/api/signin', methods=['POST'])
def signin():
    user_data = request.json
    
    # Validation
    required_fields = ['id','password']
    for field in required_fields:
        if field not in user_data:
            return jsonify({'error': f'Missing required field: {field}'}), 400
 
    # Check if user exists in the database
    user = users_collection.find_one({'id': user_data['id']})
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
     # Verify password
    if not bcrypt.checkpw(user_data['password'].encode('utf-8'), user['password'].encode('utf-8')):
        return jsonify({'error': 'Incorrect password'}), 401
    
    # Return success message
    return jsonify({'message': 'User signed in successfully',
                    'user': {
            'id': user['id'],
            'name': user['name'],
            'email': user['email']
            # Add more user data fields as needed
        }
                    }), 200

@app.route('/api/detection', methods=['POST','GET'])
def detection():
    # Check if the request contains an image file
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
    
    # Get the image file from the request
    image_file = request.files['image']
    
    response=requests.get(f"https://api.qrserver.com/v1/read-qr-code/?fileurl={image_file}")
    
    return jsonify({'response': response})

if __name__ == '__main__':
    app.secret_key = 'your_secret_key' 
    app.run(debug=True)
