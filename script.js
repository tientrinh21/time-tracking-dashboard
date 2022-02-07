const data = fetch('./data.json')
	.then(res => res.json())
	.then(data => console.log(data))
	.catch(err => console.error('Error: ' + err))


function hello()

