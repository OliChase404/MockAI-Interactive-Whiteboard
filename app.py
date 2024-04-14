# app.py
from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS


app = Flask(__name__)
socket = SocketIO(app, cors_allowed_origins="*")
CORS(app, resources={r'/*': {'origins': '*'}})

@socket.on('connect')
def handle_connect():
    print('Client connected')
    
@socket.on('disconnect')
def handle_disconnect():
    print('Client disconnected')
    
@socket.on('message')
def handle_message(message):
    print('Received message:', message)
    socket.send(message)
    
@socket.on('drawing')
def handle_drawing(data):
    print('Received drawing:', data)
    socket.emit('drawing', data, broadcast=True)

@app.route('/')
def index():
    return 'Hello, World!'

if __name__ == '__main__':
    socket.run(app, debug=True)
