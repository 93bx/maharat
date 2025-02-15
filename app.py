from flask import Flask, render_template, request, g
import json

app = Flask(__name__)


@app.before_request
def get_translations():
    g.lang = request.args.get('lang') or 'ar'

    try:
        with open(f'translations/{g.lang}.json', 'r', encoding='utf-8') as file:
            g.translations = json.load(file)
    except FileNotFoundError:
        # Fallback to English if translation file not found
        with open('translations/en.json', 'r', encoding='utf-8') as file:
            g.translations = json.load(file)


@app.route('/')
def index():
    return render_template('index.html', translations=g.translations, lang=g.lang)


@app.route('/services')
def services():
    return render_template('services.html', translations=g.translations, lang=g.lang)


@app.route('/order')
def order():
    return render_template('order.html', translations=g.translations, lang=g.lang)


@app.route('/countries')
def countries():
    return render_template('countries.html', translations=g.translations, lang=g.lang)


@app.route('/contact')
def contact():
    return render_template('contact.html', translations=g.translations, lang=g.lang)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
