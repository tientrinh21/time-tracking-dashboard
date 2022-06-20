// const test = document.querySelector("#test");
// const data = fetch('./data.json')
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data[0].timeframes.daily.current)
// 		test.innerHTML = data[0].timeframes.daily.current + "hrs";

// 	})
// 	.catch(err => console.error('Error: ' + err))

async function printJSON() {
	const response = await fetch("data.json");
	const json = await response.json();
	console.log(json);
}

printJSON();
