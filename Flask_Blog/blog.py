from flask import Flask, render_template, request, session
from flask import flash, redirect, url_for, g
import sqlite3

# configuration

app = Flask(__name__)
app.config.from_object(__name__)
app.config["DATABASE"] = "blog.db"
app.config["USERNAME"] = "admin"
app.config["PASSWORD"] = "admin"
app.config["SECRET_KEY"]="hard_to_guess"

def connect_db():
	return sqlite3.connect(app.config['DATABASE'])

@app.route('/',methods=["GET","POST"])
def login():
	error=None
	print app.config["USERNAME"]
	print app.config["PASSWORD"]
	if request.method=="POST":
		if request.form["username"]!=app.config["USERNAME"] or\
		 request.form["password"]!=app.config["PASSWORD"]:
			error="Invalid Credentials, Pleas try again"
		else:
			session["logged_in"]=True
			return redirect(url_for("main"))
	return render_template('login.html',error=error)

@app.route("/main")
def main():
	return render_template('main.html')

@app.route("/logout")
def logout():
	session.pop("logged_in",None)
	flash("You were logged out")
	return redirect(url_for('login'))

if __name__ == '__main__':
	app.run(debug=True)