from flask import Flask, jsonify, request
from flask_cors import CORS
from number_predictor import predict_number

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/', methods=['POST'])
def process_data():
    data = request.get_json() 
    csv_data = data.get('csvData')
    csv = ','.join(map(str, csv_data))

    # Call the predict_number function
    prediction = predict_number(csv)

    return jsonify(int(prediction))

if __name__ == '__main__':
    app.run()