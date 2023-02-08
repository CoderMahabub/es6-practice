document.getElementById('apply-bg').addEventListener('click', function() {
	const friends = document.getElementsByClassName('friend');
	for (const friend of friends) {
		friend.style.backgroundColor = 'lightblue';
		friend.style.padding = '10px 20px';
		friend.style.margin = '1px 2px';
	}
});

document.getElementById('center-third').addEventListener('click', function() {
	const centerThird = document.getElementById('third-friend');
	centerThird.style.textAlign = 'center';
	centerThird.style.backgroundColor = 'lightblue';
});

document.getElementById('add-friend').addEventListener('click', function() {
	const friendsContainer = document.getElementById('friends');
	const friend = document.createElement('div');
	friend.classList.add('friend');
	friend.innerHTML = `
	<h3> New Friend</h3>
	<p>Something Added</p>
	`;
	friendsContainer.appendChild(friend);
});
