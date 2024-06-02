# Recykool - E-Waste Collection Web App

Recykool is a user-friendly web application designed for efficient e-waste collection from the general public. This platform simplifies the process by allowing users to upload images of their e-waste items. By answering a few straightforward questions about the item's specifications such as RAM, memory, age, etc., users receive a predicted return price.

![SnapShot](https://github.com/hitesh-mehta/RecyKool/blob/main/Snap.png)

## Key Features:
1. User-Friendly Interface: Intuitive design makes it easy for users to upload e-waste images and provide necessary details.
2. Predictive Pricing: Utilizing advanced machine learning algorithms, Recykool predicts the return price of e-waste items accurately.
3. Specialized Pickup Service: Recykool offers users the option to book specialized pickups for their e-waste items. These pickups are designed to ensure safe handling and eco-friendly disposal.
4. E-coins Rewards: Users are rewarded with e-coins for their e-waste contributions. These e-coins can be redeemed for various incentives or used towards future e-waste pickups.

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
Recykool employs state-of-the-art machine learning techniques to predict the return price of e-waste items based on their specifications. The model is trained on a comprehensive dataset containing information about various e-waste items and their corresponding return prices. Additionally, Recykool utilizes the YOLOv8 object detection model to process images of e-waste items and extract relevant information accurately.


## Demo Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/jDfD-M1NSWg?si=wLDg42VlKFLX7K0K" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Contributing
Contributions are welcome! If you have any ideas for improvement or would like to report a bug, please open an issue on GitHub.

## License
This project is licensed under the Apache 2.0 License.
