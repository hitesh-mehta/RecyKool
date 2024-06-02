# Recykool - E-Waste Collection Web App

Recykool is a web-based solution for e-waste collection from the general public. It simplifies the process by allowing users to upload images of their e-waste items and receive a predicted return price by answering a few simple questions about the item's specifications such as RAM, memory, age, etc.

## Requirements
- Python 3
- Numpy
- Pandas
- Flask
- Flask-CORS
- Scikit-learn
- CSS Bootstrap
- FastAPI
- Uvicorn
- PyDantic
- YOLOv8

## Steps to Deploy Our Model

1. *Install Requirements:*
    bash
    pip install numpy pandas flask flask-cors scikit-learn fastapi uvicorn pydantic
    

2. *Install Data and Model Files:*
    Download and install all required data files and model files locally.

3. *Create Local Server:*
    Create a local server at port 8000 using Flask or FastAPI. For FastAPI, run the following command:
    bash
    uvicorn main:app --reload
    

4. *Deploy HTML File:*
    Deploy the HTML file to prompt the user to input data. This can be done using any web server or by serving the HTML file through Flask or FastAPI.

5. *Retrieve Output:*
    The predicted output will be returned via the FastAPI endpoint. Users can access the output through the generated documentation file.

## About the Model
Recykool utilizes machine learning algorithms to predict the return price of e-waste items based on their specifications. The model is trained on a dataset containing information about various e-waste items and their corresponding return prices. It utilizes the YOLOv8 object detection model to process images of e-waste items and extract relevant information.

## Contributing
Contributions are welcome! If you have any ideas for improvement or would like to report a bug, please open an issue on GitHub.

## License
This project is licensed under the Apache 2.0 License.
