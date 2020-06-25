from flask import Flask, render_template
app = Flask(__name__) # instantiates an instance of Flask

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/board")
def board():
    return render_template('board.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/photos")
def photos():
    return render_template('photos.html')

@app.route("/resources")
def resources():
    return render_template('resources.html')

@app.route("/videos")
def videos():
    return render_template('videos.html')


if __name__ == "__main__":
    app.debug = True
    app.run()
