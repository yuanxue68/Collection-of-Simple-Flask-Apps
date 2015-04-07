from flask import Flask, render_template, request, session
from flask import flash, redirect, url_for, g
import sqlite3
from functools import wraps

# configuration

app = Flask(__name__)
app.config.from_object(__name__)
app.config["DATABASE"] = "blog.db"
app.config["USERNAME"] = "admin"
app.config["PASSWORD"] = "admin"
app.config["SECRET_KEY"]="hard_to_guess"

def connect_db():
	return sqlite3.connect(app.config['DATABASE'])

def login_required(test):
	@wraps(test)
	def wrap(*args, **kwargs):
		if 'logged_in' in session:
			return test(*args, **kwargs)
		else:
			flash('You need to login first.')
			return redirect(url_for('login'))
	return wrap

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
@login_required
def main():
	g.db = connect_db()
	cur = g.db.execute('select * from posts')
	posts = [dict(title=row[0], post=row[1]) for row in
		cur.fetchall()]
	g.db.close()
	return render_template('main.html', posts=posts)

@app.route("/logout")
def logout():
	session.pop("logged_in",None)
	flash("You were logged out")
	return redirect(url_for('login'))

@app.route('/add', methods=['POST'])
@login_required
def add():
	title = request.form['title']
	post = request.form['post']
	if not title or not post:
		flash("All fields are required. Please try again.")
		return redirect(url_for('main'))
	else:
		g.db = connect_db()
		g.db.execute('insert into posts (title, post) values (?,?)',
		[request.form['title'], request.form['post']])
		g.db.commit()
		g.db.close()
		flash('New entry was successfully posted!')
		return redirect(url_for('main'))

if __name__ == '__main__':
	app.run(debug=True)
