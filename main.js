//-- Code Copyright 2019 Dylan Tuten --\\
var Game = {
	points: 0,
	level: 0,
	items: 0,
	pointsPerClick: 1,
	levelPerClick: 0.03,
	pointsPerClickCost: 10,
	levelPerClickCost: 200,
	players: 0,
	ct: 0,
	hit: 0
}
document.getElementById("ctSHOW").style.display = "none";
document.getElementById("hitSHOW").style.display = "none";
function gainPoints(num) {
	Game.points += Game.pointsPerClick
}
function getLevel() {
	Game.level += Game.levelPerClick
}
function getItems() {
	if (Game.points <= 100){
		Game.items += (Game.points)*2
	}
	else {
		Game.items += 250
	}
}
function buyPointsPerClick() {
	Game.level = Math.round(Game.level)
	if (Game.level >= Game.pointsPerClickCost) { 
		Game.level -= Game.pointsPerClickCost
		Game.pointsPerClick *= 2
		Game.pointsPerClickCost *= 1.5
		document.getElementById("perClickUpgrade").innerHTML = "More Points Per Click (Currently Gaining " + Game.pointsPerClick + " Points Per Click) Cost: " + Math.round(Game.pointsPerClickCost) + " Level"
	}
}
function buyLevelPerClick() {
	Game.points = Math.round(Game.points)
	if (Game.points >= Game.levelPerClickCost) {
		Game.points -= Game.levelPerClickCost
		Game.levelPerClick *= 2
		Game.levelPerClickCost *= 1.5
		document.getElementById("LperClickUpgrade").innerHTML = "More Level Per Click (Currently Gaining " + Game.levelPerClick + " Level Per Click) Cost: " + Math.round(Game.levelPerClickCost) + " Points"
	}
}
function buyPlayer() {
	if (Game.items >= 5000) { 
		Game.items -= 5000
		Game.players += 1
		document.getElementById("playerShop").innerHTML = "You own " + Game.players + " of these."
		document.getElementById("ctSHOW").style.display = "block";
	}
}
function buyCt() {
	if (Game.items >= 10000) { 
		Game.items -= 10000
		Game.ct += 1
		document.getElementById("ctShop").innerHTML = "You own " + Game.ct + " of these."
		document.getElementById("hitSHOW").style.display = "block";
	}
}
function buyHit() {
	if (Game.points >= 10000) { 
		Game.points -= 10000
		Game.hit += 1
		document.getElementById("hitShop").innerHTML = "You own " + Game.hit + " of these."
	}
}
var mainGameLoop = window.setInterval(function() {
	if (Game.points > 10) {
		document.getElementById("status").innerHTML = "Status: People have heard about your skill. They are scared of your power."
	} if (Game.points > 100) {
		document.getElementById("status").innerHTML = "Status: You have a lot of fans."		
	}if (Game.points > 1000) {
		document.getElementById("status").innerHTML = "Status: People worship you."		
	}if (Game.points > 10000) {
		document.getElementById("status").innerHTML = "Status: You are in the top 5 players."		
	}if (Game.points > 100000) {
		document.getElementById("status").innerHTML = "Status: You are number one."		
	}if (Game.points > 1000000) {
		document.getElementById("status").innerHTML = "Status: Everybody knows your name."
	}if (Game.points > 10000000) {
		document.getElementById("status").innerHTML = "Status: You are a god."		
	}if (Game.points > 1000000000) {
		document.getElementById("status").innerHTML = "Status: You are god."		
	}if (Game.points > 100000000000) {
		document.getElementById("status").innerHTML = "Status: At this point, people die in your name."		
	}if (Game.points > 100000000000000) {
		document.getElementById("status").innerHTML = "Status: "		
	}if (Game.points > 100000000000000000) {
		document.getElementById("status").innerHTML = "(The status-writer died in your name)"		
	}
	document.getElementById("pointsGained").innerHTML = Math.round(Game.points) + " Points"
	document.getElementById("levelGained").innerHTML = Math.round(Game.level) + " Level"
	document.getElementById("itemsGained").innerHTML = Math.round(Game.items) + " Items"
	Game.pointsPerClickCost == Math.round(Game.pointsPerClickCost)
	Game.points == Math.round(Game.points)
}, 1)
var playerLoop = window.setInterval(function() {
	Game.points +=Game.players
}, 1000)
var ctLoop = window.setInterval(function() {
	Game.points += Game.ct
}, 400)
var ctLoop = window.setInterval(function() {
	Game.items += (Game.hit)*Game.points
}, 350)