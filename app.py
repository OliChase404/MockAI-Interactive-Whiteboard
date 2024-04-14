from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_pymongo import PyMongo
from flask import request

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/whiteboard"
socketio = SocketIO(app, cors_allowed_origins="*")
mongo = PyMongo(app)

@app.route('/')
def index():
    return ('Nothing to see here')

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('message')
def handle_message(message):
    print('Received message:', message)
    emit('message', message, broadcast=True)

@socketio.on('drawing')
def handle_drawing(data):
    print('Received drawing:', data)
    emit('drawing', data, broadcast=True)
    
    
@app.route('/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'POST':
        data = request.json
        mongo.db.collection.insert_one(data)
        return {'status': 'success'}, 200
    else:
        data = mongo.db.collection.find()
        return list(data)

if __name__ == '__main__':
    socketio.run(app, debug=True)
