const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const fs = require('fs');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri =
	'mongodb+srv://moonBrooke_user:imountthemoon1337@cluster0.5fsiovo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

function getDate() {
	var a = new Date().toISOString();
	var myDate = new Date(a);
	myDate.setDate(myDate.getDate() + parseInt(10));
	return myDate.toISOString();
}

async function run() {
	await client.connect();

	app.post('/login', (req, res) => {
		const emailEnter = req.body.email;
		const passEnter = req.body.password;

		console.log(req.body);
		client
			.db('users')
			.collection('userDetails')
			.findOne({ email: emailEnter }, function (err, items) {
				if (err) throw err;
				if (!items)  // If no email found in mongo query
					res.send({
						error: {
							code: 400,
							message: 'EMAIL_NOT_FOUND',
							errors: [
								{
									message: 'EMAIL_NOT_FOUND',
									domain: 'global',
									reason: 'invalid',
								},
							],
						},
					});
				else {
					if (passEnter != items.password) { // If email found but incorrect password
						res.send({
							error: {
								code: 400,
								message: 'INVALID_PASSWORD',
								errors: [
									{
										message: 'INVALID_PASSWORD',
										domain: 'global',
										reason: 'invalid',
									},
								],
							},
						});
					} else {
						res.send({  // If everything is cool, items object is the mongoDB output
							kind: 'identitytoolkit#VerifyPasswordResponse',
							localId: 'qmt6dRyipIad8UCc0QpMV2MENSy1',
							email: items.email,
							displayName: items.name,
							idToken:
								'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmVhY3QtY291cnNlLWI3OThlIiwiYXVkIjoicmVhY3QtY291cnNlLWI3OThlIiwiYXV0aF90aW1lIjoxNjYwMDQ3NTQ4LCJ1c2VyX2lkIjoicW10NmRSeWlwSWFkOFVDYzBRcE1WMk1FTlN5MSIsInN1YiI6InFtdDZkUnlpcElhZDhVQ2MwUXBNVjJNRU5TeTEiLCJpYXQiOjE2NjAwNDc1NDgsImV4cCI6MTY2MDA1MTE0OCwiZW1haWwiOiJkZW1vQGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlbW9AZXhhbXBsZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ie2uFbDy3ZGD5PDCl4Jf_ybOhTciag0JZKQGECsBn8Bl8G5GNVGut8IhzzVZI_IPa0dZHRodT2XhDZV1DYRRvMzECbnZ_3jvTC7iSQw63zSmnPItz_GHabYP66ZFQab9u8mA3zR_fsiMg0AI49NfO4BON3QVv3RktNjrzK8aaRsPCxwmUUrnsziRKdsEOQs8Pdosmbpm4C3W2aMJ_0p-1opQaIOsZe4zMHrnBKpEz38MtcoHZTSmedYOKLRR-_iiNj4aJhRt3jBi-dHz5tmF4elkCFqKhjicFu_kYPeKi4VKFxwX2m_H1gxgBeNRdWTK1Gc7kzU_4MnFOBtW87mP2w',
							registered: true,
							refreshToken:
								'AOEOulaOrnkyQt9A_0qwJmpQJL2axqpLmYd0UEGSkiIrOOVlkdZK9kvbF4LVTFspYsV4DQ1YIYSB1tb6z5SfVHhn67D-0mv-Z1dOIY07VRr0lA6dJf0II0DkIVVegmh4XWDJYXr4VB4BgGc85yWuhe_EtJhjAXaWT26i9FyYQtA45r-Xevs3awol4sTSmsB9Jbs4oSLSQxB6b95TeKg5bIm70Ngich15fQ',
							expiresIn: '3600',
							expireDate: getDate(),
							// "expireDate": "2022-08-09T18:49:07.797Z"
						});
					}
				}
			});
	});
}
run();

const server = app.listen(3001, () => {
	console.log('listening on port %s...', server.address().port);
});
