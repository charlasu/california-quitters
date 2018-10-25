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
        'AZ': db.AZ_Brewery,
        'CA': db.CA_Brewery,
        'CO': db.CO_Brewery,
        'ID': db.ID_Brewery,
        'NV': db.NV_Brewery,
        'OR': db.OR_Brewery,
        'UT': db.UT_Brewery,
        'WA': db.WA_Brewery
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
            'coords': [float(doc['COORDS'].split(",")[0][1:]), float(doc['COORDS'].split(",")[1][1:][:-1])],
            'year': int(doc['YR']),
            'num_outbound': int(doc['NO_OUTBOUND'].replace(',', ''))
        }
        if(type(doc['POPULATION']) != str):
            appendable_dict['population'] = int(-1)
        else:
            appendable_dict['population'] = int(doc['POPULATION'].replace(',', ''))
        pop_data.append(appendable_dict)

    return json.dumps(pop_data)

# @app.route("/api/rent")
# def housing():
#     """Return a json of housing data for given year"""
#     res = db.session.query(*sel).filter(HousingData.year == year).all()
#
#     house_to_json = {}
#     for re in res:
#         house_to_json["variable_name"] = re[i]
#
#     return jsonify(house_to_json)


if __name__ == "__main__":
    app.run()
