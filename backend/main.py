import pickle

def load_model(filename):
    with open(filename, "rb") as file:
        return pickle.load(file)

# TODO: Prepare the input data for the models.
# Takes in the attributes and returns a dataframe and a dictionary to make
# prediction with our model.
def prepare_input():

    input_dict = {
    
    }

    input_df = pd.DataFrame([input_dict])

    return input_df, input_dict

# TODO: Define a function to make predictions using the ML models we trained.
# Takes in the input dataframe and input dictionary from prepare_input().
def make_predictions(input_df, input_dict):
    
    # Dictionary representing the prediction of the model.  
    # predict_proba() returns an array of predicted probabilities for each
    # class.  This scenario has two classes, 0 and 1, also called the negative
    # class and the positive class, where negative is "unstable" and positive is
    # "stable".
    # We only care about the positive value (the second value, corresponding to
    # predicting who will churn), so we store the value at index 1, and not the 
    # one at index 0.
    # We're using the models we trained, so it knows what the target value is
    # (whether the market is unstable or not), and that is binary (either 0 or 1.)
    prediction = xgboost_model.predict_proba(input_df)[0][1]
    
    
    return prediction

model = load_model("xgb_model_with_SMOTE.pkl")