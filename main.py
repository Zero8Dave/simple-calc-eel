import eel
eel.init('web', allowed_extensions=['.js', '.html'])

@eel.expose
def add_py(a, b):

    return a+b

@eel.expose
def substract(a, b):
    return a-b
@eel.expose
def divise(a, b):
    return a/b

@eel.expose
def multiply(a,b):
    return a*b


eel.start('index.html', mode="chrome", size = (770,580))

            
