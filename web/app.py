# app.py

import os
from flask import Flask
from flask import request, render_template, redirect, url_for
from flask.ext.sqlalchemy import SQLAlchemy
from config import BaseConfig

from flask_admin import Admin

from werkzeug.utils import secure_filename
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField

app = Flask(__name__)
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)

admin = Admin(app, name='meucamelo', template_mode='foundation')


from models import *


@app.route('/')
def index():
    return render_template('public/index.html')


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
