// index 0 is current-data and index 1 is previous-data
const work = document.querySelectorAll('.work')
const play = document.querySelectorAll('.play')
const study = document.querySelectorAll('.study')
const exercise = document.querySelectorAll('.exercise')
const social = document.querySelectorAll('.social')
const selfCare = document.querySelectorAll('.self-care')

const categories = [work, play, study, exercise, social, selfCare]

const dailyBtn = document.querySelector('#daily-btn');
const weeklyBtn = document.querySelector('#weekly-btn');
const monthlyBtn = document.querySelector('#monthly-btn');

async function getData() {
	const response = await fetch('data.json');
	return response.json();
}

// Update data shown in each category according to selected period
async function displayData() {
	const period = this.textContent.toLowerCase()
	const data = await getData();
	let previousPeriodText = ''

	switch (period) {
		case 'daily':
			previousPeriodText = 'Yesterday';
			break;

		case 'weekly':
			previousPeriodText = 'Last Week';
			break;

		case 'monthly':
			previousPeriodText = 'Last Month';
			break;
	}

	for (let i = 0; i < 6; i++) {
		let currentData = data[i]['timeframes'][period]['current'];
		let prevData = data[i]['timeframes'][period]['previous'];

		currentData > 1 ? currentData += 'hrs' : currentData += 'hr'
		prevData > 1 ? prevData += 'hrs' : prevData += 'hr'

		categories[i][0].textContent = currentData;
		categories[i][1].textContent = previousPeriodText + ' - ' + prevData;
	}
}

dailyBtn.addEventListener('click', displayData)
weeklyBtn.addEventListener('click', displayData)
monthlyBtn.addEventListener('click', displayData)

