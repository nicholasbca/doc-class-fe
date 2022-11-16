import time
from flask import Flask, request
from pdf2image import convert_from_path
import numpy as np
import pathlib
import os
import cv2
import uuid
import tensorflow as tf
from flask_cors import CORS

print("loading lib")

list_of_doctype = ['advertisement', 'budget', 'email', 'file_folder', 'form', 'handwritten', 'invoice', 'letter',
                   'memo', 'news_article', 'presentation', 'questionnaire', 'resume', 'scientific_report', 'specification']

print("Loading Model, estimated 5 minutes, please wait...")
m = tf.keras.models.load_model('/app/saved_model.h5', compile=False)
print("API READY!")

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api/predict', methods=["POST"])
def get_prediction():
    f = request.files['file']
    filename = str(uuid.uuid4()) + pathlib.Path(f.filename).suffix
    f.save(filename)
    predict_result = m.predict(np.expand_dims(convert_image(filename), axis=0))
    os.remove(filename)
    if pathlib.Path(filename).suffix == ".pdf":
        os.remove(filename + ".jpg")
    return {
        'document_type': list_of_doctype[predict_result.argmax()],
        'confidence_level': float(predict_result.max()) * 100
    }


def convert_image(images):
    if pathlib.Path(images).suffix == ".pdf":
        print("CONVERT PDF")
        pages = convert_from_path(images)
        for page in pages:
            page.save(images + ".jpg")
            break
        images = images + ".jpg"

    img = cv2.imread(images)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    img = cv2.resize(img, (120, 120))
    img1 = img[0:30, 0:120]/255
    img2 = img[30:90, 0:60]/255
    img3 = img[30:90, 60:120]/255
    img4 = img[90:120, 0:120]/255
    img = np.asarray([cv2.resize(img1, (48, 48)),
                      cv2.resize(img2, (48, 48)),
                      cv2.resize(img3, (48, 48)),
                      cv2.resize(img4, (48, 48))])
    img_mean = np.mean(img)
    img = img - img_mean
    img = img / np.std(img)
    return img
