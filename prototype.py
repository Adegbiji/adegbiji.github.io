import requests

api_link = 'https://www.boredapi.com/api/activity/'
r = requests.get(api_link)

if r.status_code != 200:
	print("Oops. Something went wrong.")
else:
	print(r.json()['activity'])