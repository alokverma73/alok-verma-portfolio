import os
import json

from flask import Flask, render_template, send_from_directory, request


app = Flask(__name__)


# =========================================
# DATA LOADER
# =========================================

def load_json(filename):
    path = os.path.join(app.root_path, "data", filename)

    try:
        with open(path, "r", encoding="utf-8") as file:
            return json.load(file)

    except Exception as error:
        print(f"Error loading {filename}: {error}")
        return {}


# =========================================
# ROUTES
# =========================================

@app.route("/")
def home():
    return render_template(
        "index.html",
        skills=load_json("skills.json"),
        projects=load_json("projects.json"),
        experience=load_json("experience.json")
    )


@app.route("/about")
def about():
    return render_template(
        "about.html",
        skills=load_json("skills.json"),
        certifications=load_json("certifications.json")
    )


@app.route("/experience")
def experience():
    return render_template(
        "experience.html",
        experience=load_json("experience.json")
    )


@app.route("/projects")
def projects():
    return render_template(
        "projects.html",
        projects=load_json("projects.json")
    )


@app.route("/contact", methods=["GET", "POST"])
def contact():

    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        subject = request.form.get("subject", "").strip()
        message = request.form.get("message", "").strip()

        print("\n========== NEW CONTACT MESSAGE ==========")
        print(f"Name: {name}")
        print(f"Email: {email}")
        print(f"Subject: {subject}")
        print(f"Message: {message}")
        print("=========================================\n")

        return render_template(
            "contact.html",
            success=True
        )

    return render_template("contact.html")


# =========================================
# 404 ERROR PAGE
# =========================================

@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


# =========================================
# RESUME
# =========================================

@app.route("/resume")
def resume():
    return send_from_directory(
        os.path.join(app.root_path, "static", "resume"),
        "Alok_Verma_Resume.pdf"
    )


# =========================================
# RUN APPLICATION
# =========================================

if __name__ == "__main__":
    app.run(debug=True)