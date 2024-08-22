import requests
import eel

eel.init("web")

@eel.expose
def get_quote():
    request = requests.get("https://zenquotes.io/api/random")
    try:
        data_request = request.json()
        quote = data_request[0]['q']
        author = data_request[0]['a']

        print ("Got Quote")

        return f'{quote} - {author}' 
    
    except:
        return 'Error: Failed to fetch quote'
    
eel.start('index.html', size=(800, 600))
    
