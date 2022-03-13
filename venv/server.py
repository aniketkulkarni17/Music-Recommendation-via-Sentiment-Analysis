from flask import Flask, render_template
import json
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import sqlite3
import smtplib
import ssl
# import database

app = Flask(__name__, template_folder='templates')


def print_database():
    conn = sqlite3.connect('music.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM songs")
    items = cursor.fetchall()

    print("SONG " + "\t\tCOUNT")
    print("-------" + "\t\t-------")
    for item in items:
        word = item[0].split()
        if len(word) == 1:
            print(item[0] + "\t\t" + str(item[1]))
        else:
            print(item[0] + "\t\t" + str(item[1]))
    conn.commit()
    conn.close()

# Insert into database all songs from all sentiments with corresponding report counts
def insert_in_database():
    conn = sqlite3.connect('music.db')
    songs_list = [('Too Close', 0), ('Blue World', 0), ('Blueface', 0), ('BOY', 0), ('Undrunk', 0), ('That One Song', 0), ('Good News', 0), ('Happy People', 0), ('2009', 0), ('Danny Darling', 0), ('Gfalls', 0),
                  ('Heartbreak', 0), ('LA Girls', 0), ('Remember', 0), ('Small Worlds', 0), ('Rain', 0), ('Cloyster', 0), ('Everything', 0), ('Rainy Days', 0), ('Sundown', 0), ('Botanicals', 0), ('Untitled', 0), ('Yeah Right', 0)]
    cursor = conn.cursor()
    cursor.executemany("INSERT INTO songs VALUES (?,?)", songs_list)

    cursor.execute("SELECT * FROM songs")
    print(cursor.fetchall())
    conn.commit()
    conn.close()

# Creating initial database with some songs
def create_database():
    conn = sqlite3.connect('music.db')

    cursor = conn.cursor()

    cursor.execute("""CREATE TABLE songs (
    name text,
    count null
    )
    """)

    songs_list = [('Wake up', 0), ('Gravity', 0), ('Emily', 0),
                  ('Stay', 0), ('Straightjacket', 0)]

    cursor.executemany("INSERT INTO songs VALUES (?,?)", songs_list)
    conn.commit()
    conn.close()

# Send email to host 
def send_email(songInfo):
    subject = "Change request for a song - VIBE MRS"
    body = f'Song - {songInfo} has been reported more than four times.'
    msg = f'Subject: {subject}\n\n{body}'
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as server:
        server.login("kulaniket1512@gmail.com", "famousfive987")
        server.sendmail("kulaniket1512@gmail.com",
                        "kulaniket1512@gmail.com", msg)

# Update report count of a song 
def update_database(songInfo):
    conn = sqlite3.connect('music.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM songs WHERE name = (?)", (songInfo,))
    count = cursor.fetchall()[0][1]
    count = count + 1
    if count >= 4:
        send_email(songInfo)
    cursor.execute(
        "UPDATE songs SET count = (?) WHERE name = (?)", (count, songInfo))
    conn.commit()
    conn.close()

# Calculate sentiment of user input
def get_sentiment_index(text):
    tokenizer = AutoTokenizer.from_pretrained(
        'nlptown/bert-base-multilingual-uncased-sentiment')
    model = AutoModelForSequenceClassification.from_pretrained(
        'nlptown/bert-base-multilingual-uncased-sentiment')

    tokens = tokenizer.encode(
        text, return_tensors='pt')
    result = model(tokens)
    sentiment_index = int(torch.argmax(result.logits))+1

    if (("rainy" in text) or ("gloomy" in text) or ("dull" in text) or ("mundane" in text) or ("rainy day" in text)):
        return 10
    elif (("finding meaning" in text) or ("lost" in text) or ("overthinking" in text) or ("finding direction" in text) or ("direction" in text)):
        return 20
    else:
        return sentiment_index


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/processUserInfo/<string:userInfo>", methods=['POST'])
def processUserInfo(userInfo):
    userInfo = json.loads(userInfo)
    sentiment = get_sentiment_index(userInfo['input'])
    return str(sentiment)


@app.route("/processSongInfo/<string:songInfo>", methods=['POST'])
def processSongInfo(songInfo):
    songInfo = json.loads(songInfo)
    songInfo = songInfo['input']
    print("DATABASE BEFORE UPDATING")
    print_database()
    # insert_in_database()
    # create_database()
    update_database(songInfo)
    print(print_database)
    print("DATABASE AFTER UPDATING")
    print_database()
    return f'Song name received: {songInfo}'


@app.route("/rock")
def renderRockPage():
    return render_template("rock.html")


@app.route("/sad")
def renderSadPage():
    return render_template("sad.html")


@app.route("/relaxing")
def renderRelaxingPage():
    return render_template("relaxing.html")


@app.route("/happy")
def renderHappyPage():
    return render_template("happy.html")


@app.route("/episodes")
def renderUpbeatPage():
    return render_template("episodes.html")


@app.route("/curated2")
def renderCurated2():
    return render_template("curated2.html")


@app.route("/sad2")
def rendersad2():
    return render_template("sad2.html")


if __name__ == "__main__":
    app.run(debug=True)
