// index 0 is current-data and index 1 is previous-data
const work = document.querySelectorAll(".work")
const play = document.querySelectorAll(".play")
const study = document.querySelectorAll(".study")
const exercise = document.querySelectorAll(".exercise")
const social = document.querySelectorAll(".social")
const selfCare = document.querySelectorAll(".self-care")

const dailyBtn = document.querySelector("#daily-btn");
const monthlyBtn = document.querySelector("#monthly-btn");
const yearlyBtn = document.querySelector("#yearly-btn");

async function getData() {
	const response = await fetch("data.json");
	const json = await response.json()
	return json;
}

getData().then(console.log)



