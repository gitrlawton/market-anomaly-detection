import pickle
import requests
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS

def load_model(filename):
    with open(filename, "rb") as file:
        return pickle.load(file)

def make_prediction():
    
    model = load_model("backend/xgb_model.pkl")

    try:
        # Make the GET request
        response = requests.get("http://localhost:3000/api/market-data")
        response.raise_for_status()  # Raise an error for HTTP codes 4xx/5xx

        # Parse and use the response data
        data = response.json()
        print("Market Data:", data)

        # Specify the exact order of columns
        column_order = ['GT10', 'Cl1', 'USGG3M', 'DXY', 'JPY', 'VIX']

        # Create a DataFrame with the specified order
        # "feature" is a variable name for the column, and "data[feature]['currentValue']" is the value
        # iterating over each feature in column_order
        current_datapoint = pd.DataFrame({
            feature: [data[feature]['currentValue']] for feature in column_order
        })

        # Make predictions
        prob_predictions = model.predict_proba(current_datapoint)

        # Get the probability for class 1 (market crash)
        class_1_probs = prob_predictions[:, 1]

        threshold = 0.43

        # Make predictions using the threshold
        predictions = (class_1_probs >= threshold).astype(int)
        prediction = predictions[0]

        print(f"Prediction: {prediction}")
    except requests.exceptions.RequestException as e:
        print("An error occurred:", e)
        
        
    return prediction or None


app = Flask(__name__)
CORS(app)

@app.route("/api/predict", methods=["GET"])
def get_prediction():
    try:
        prediction = int(make_prediction())  
        print(f"Prediction: {prediction}")
        return jsonify({"prediction": prediction})
    except Exception as e:
        print(f"Error in prediction: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)