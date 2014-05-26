import os
d = 'python_examples'
files = [f for f in os.listdir(d)]
for f in files:
    if '.py' in f:
        print f
        os.system("{d}/{fn} 1".format(d=d, fn=f))
