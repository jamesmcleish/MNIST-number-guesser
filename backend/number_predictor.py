import tensorflow as tf
import numpy as np

# Load the saved model
model = tf.keras.models.load_model('mnist_model.h5')

def predict_number(pixel_values):
    # Convert the pixel values string to a numpy array
    pixels = np.array(eval(pixel_values)).reshape(1, 28, 28, 1)
    
    # Normalize the pixel values
    pixels = pixels / 255.0
    
    # Make the prediction
    prediction = model.predict(pixels)
    
    # Get the predicted number
    predicted_number = np.argmax(prediction)
    
    return predicted_number

