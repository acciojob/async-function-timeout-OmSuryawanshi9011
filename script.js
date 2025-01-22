document.getElementById('btn').addEventListener('click',async function() {
	var text = document.getElementById('text').value;
	var delay = document.getElementById('delay').value;

	await new Promise(resolve => setTimeout(resolve, delay));

	document.getElementById('output').innerText = text;
});
