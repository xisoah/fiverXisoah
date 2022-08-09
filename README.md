> Backend/server.js
- This is the express API server that I have written. Connects to mongodb atlas and is hosted on port 3001.

>Frontend/src/jsx/pages/Login.js
- This page has the login form, email and pass entered here are sent to the onLogin function, where it is then sent to loginAction function.

>Frontend/src/store/actions/AuthActions.js
- This page has the loginAction function that is being used in the Login page above. The loginAction function is I think the issue is. The email, password is sent to a login function(login function does an axios post request to the API that decides the flow of the app)

>Frontend/src/services/AuthService.js
- This is where the frontend connects with the backend by making post requests using Axios. There are currently 2 APIs in use which you will see in the file.
1) Firebase API which is what the front end shipped it when i purchased it, we cannot control this api, however the registered user in this api is:
	Email: demo@example.com
	Pass:  123456

The object returned from this api works and we can proceed to the dashboard

2) My express API which returns all the same objects as the firebase API(I manually tried all combinations like invalid email, invalid pass, successful auth). The only user in this database is
	Email: test@test.com
	Pass: pass

>Frontend/src/jsx/components/Dashboard/Home.js
- This is the dashboard component that is loaded, along with the header, sidebar, etc [Inside the Frontend/src/jsx/layouts/nav folder]

The main app renders if we use the firebase api, but does not work with the express API. Can you please check why this is happening? Thanks!
