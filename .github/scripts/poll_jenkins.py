import requests
import time

JENKINS_URL = "https://jenkins.telware.tech/job/frontend_dev"
API_TOKEN = "118945b975e51def3231f6d0e770589833"
USER = "telware"

while True:
    response = requests.get(f"{JENKINS_URL}/lastBuild/api/json", auth=(USER, API_TOKEN))
    data = response.json()

    if data.get('building'):
        print("Build is still running...")
    else:
        print(f"Build finished with status: {data.get('result')}")
        break

    time.sleep(10)  
