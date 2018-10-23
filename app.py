from flask import Flask, jsonify, render_template
import pymongo
import json
app = Flask(__name__)


#################################################
# Database Setup
#################################################

connect = 'mongodb://user:California1@ds253891.mlab.com:53891/project_2'
client = pymongo.MongoClient(connect)

#connect to mongo db and collection
db = client.project_2

# reflect an existing database into a new model
# pop_db = client.
# brew_db = client.
# house_db = client.

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

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

@app.route("/api/breweries/<state_abbr>")
def brewery_state(state_abbr):
    """return brewery data by state"""

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

# @app.route("/test")
# def test():
#     """test"""
#     collection = db.Population_Data

# @app.route("/api/population/<year>")
# def population():
#     """Return a json of population data for given year"""
#     res = db.session.query(*sel).filter(PopulationData.year == year).all()
#
#     population_to_json = {}
#     for re in res:
#         population_to_json["year"] = re[0]
#         population_to_json["state"] = re[7]
#         population_to_json["pop"] = re[1]
#         population_to_json["variable_name"] = re[i]
#
#     return jsonify(population_to_son)
#
# @app.route("/api/housing/<year>")
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
