#import dependencies
from flask import Flask, render_template
import pymongo
import json

#establish flask app
app = Flask(__name__)

#connect local client to remote server through uri
connect = 'mongodb://user:California1@ds253891.mlab.com:53891/project_2'
client = pymongo.MongoClient(connect)

#create reference to project_2 db
db = client.project_2

#routes
@app.route("/")
def index():
    """return index.html"""
    return render_template("index.html")

@app.route("/dash")
def dash():
    """return dash.html"""
    return render_template("dash.html")

@app.route("/bib")
def bib():
    """return dash.html"""
    return render_template("bibliography.html")

@app.route("/map")
def map():
    """return map.html"""
    return render_template("map.html")

@app.route("/api/breweries/<state_abbr>")
def brewery_state(state_abbr):
    """return brewery data by state"""

    #get collection by state abbreviation
    get_brew_collection = {
        'AZ': db.breweries_AZ,
        'CA': db.breweries_CA,
        'CO': db.breweries_CO,
        'ID': db.breweries_ID,
        'NV': db.breweries_NV,
        'OR': db.breweries_OR,
        'UT': db.breweries_UT,
        'WA': db.breweries_WA
    }

    collection = get_brew_collection[state_abbr.upper()]
    state_brew_data = []

    cursor = collection.find({})
    for doc in cursor:
        appendable_dict = {
            'brewery': doc['Brewery'],
            'state': doc['State'],
            'loc': doc['Location'],
            'year_est': doc['Established Year']
        }
        state_brew_data.append(appendable_dict)

    return json.dumps(state_brew_data)

@app.route("/api/population")
def population():
    """return population data"""

    collection = db.Population_Data
    pop_data = []

    cursor = collection.find({})
    for doc in cursor:
        appendable_dict = {
            'moved_to': doc['MOVED_TO'],
            'year': int(doc['YR']),
            'num_outbound': int(doc['NO_OUTBOUND']),
            'pop': int(doc['POPULATION'])
        }
        pop_data.append(appendable_dict)

    return json.dumps(pop_data)

@app.route("/api/rent")
def housing():
    """return rent data"""
    
    collection = db.Rent_Value_Data
    rent_data = []

    cursor = collection.find({})
    for doc in cursor:
        appendable_dict = {
            'date': doc['Date'],
            'us_rent': doc['US_Rent'],
            'us_val': doc['US_Value'],
            'ca_rent': doc['California_Rent'],
            'ca_val': doc['California_Value'],
            'az_rent': doc['Arizona_Rent'],
            'az_val': doc['Arizona_Value'],
            'co_rent': doc['Colorado_Rent'],
            'co_val': doc['Colorado_Value'],
            'id_rent': doc['Idaho_Rent'],
            'id_val': doc['Idaho_Value'],
            'nm_rent': doc['New_Mexico_Rent'],
            'nm_val': doc['New_Mexico_Value'],
            'nv_rent': doc['Nevada_Rent'],
            'nv_val': doc['Nevada_Value'],
            'or_rent': doc['Oregon_Rent'],
            'or_val': doc['Oregon_Value'],
            'ut_rent': doc['Utah_Rent'],
            'ut_val': doc['Utah_Value'],
            'wa_rent': doc['Washington_Rent'],
            'wa_val': doc['Washington_Value']
        }
        rent_data.append(appendable_dict)
    return json.dumps(rent_data)


if __name__ == "__main__":
    app.run()
