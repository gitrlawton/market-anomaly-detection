import joblib
import pandas as pd
from sklearn.metrics import classification_report, accuracy_score
import xgboost as xgb
import streamlit as st

# Load the model from the xgb_model directory
def load_model():
    model = joblib.load('xgb_model.pkl')  # Adjust the filename if necessary
    return model

#Added this model eval funct

# Model Evaluation Function
def evaluate_model(model, X_test, y_test):
    """
    This function evaluates the model's performance on the given test set.

    :param model: The trained model.
    :param X_test: Test data features.
    :param y_test: True labels for the test data.
    :return: Prints the evaluation metrics.
    """
    # Make predictions on the test set
    y_pred = model.predict(X_test)

    # Calculate accuracy and print the classification report
    accuracy = accuracy_score(y_test, y_pred)
    st.write(f"Accuracy: {accuracy:.2f}")

    # Print classification report
    st.write("Classification Report:")
    st.text(classification_report(y_test, y_pred))

# Example usage within the app
def main():
    model = load_model()

    # Simulate loading test data (X_test, y_test)
    # Replace this with actual test data loading from your dataset
    # Example: X_test, y_test = prepare_input()
    
    # Dummy test data (replace with your actual test data)
    X_test = pd.DataFrame([[0.5, 1.2, -0.3], [1.0, -0.4, 0.5]], columns=['feature1', 'feature2', 'feature3'])
    y_test = pd.Series([0, 1])

    # Call the evaluate_model function
    evaluate_model(model, X_test, y_test)

if __name__ == "__main__":
    main()
