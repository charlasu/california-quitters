import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data/caliquit.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
Base.prepare(db.engine, reflect=True)

# Save references to each table
PopulationData = Base.classes.population
BreweryData = Base.classes.breweries
HousingData = Base.classes.housing


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/api/population/<year>")
def population():
    """Return a json of population data for given year"""
    res = db.session.query(*sel).filter(PopulationData.year == year).all()

    population_to_json = {}
    for re in res:
        population_to_json["year"] = re[0]
        population_to_json["state"] = re[7]
        population_to_json["pop"] = re[1]
        population_to_json["variable_name"] = re[i]

    return jsonify(population_to_son)

@app.route("api/breweries/<year>")
def breweries():
    """Return a json of brewery data for given year"""
    res = db.session.query(*sel).filter(BreweryData.year == year).all()

    brewery_to_json = {}
    for re in res:
        brewery_to_json["variable_name"] = re[i]

    return jsonify(brewery_to_json)

@app.route("api/housing/<year>")
def housing():
    """Return a json of housing data for given year"""
    res = db.session.query(*sel).filter(HousingData.year == year).all()

    house_to_json = {}
    for re in res:
        house_to_json["variable_name"] = re[i]

    return jsonify(house_to_json)


if __name__ == "__main__":
    app.run()
