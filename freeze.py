from flask_frozen import Freezer
from app import app

freezer = Freezer(app)

@freezer.register_generator
def about():
    yield '/about/'

@freezer.register_generator
def contact():
    yield '/contact/'

@freezer.register_generator
def board():
    yield '/board/'

@freezer.register_generator
def photos():
    yield '/photos/'

@freezer.register_generator
def resources():
    yield '/resources/'

@freezer.register_generator
def videos():
    yield '/videos/'

if __name__ == '__main__':
    freezer.run(debug=True)
    freezer.freeze()
