document.addEventListener('DOMContentLoaded', function () {
	let excludeList = [0,1,2,3,4];
	let topicMax = 2;
	let appendLocation = '.new-topics-location';

	if ('<!-- |input_act| -->' === 'idx') {
		let topicList = document.querySelectorAll('#recent-topics tr');

		for (var i=0;i<topicList.length;i++) {
			var url = topicList[i].querySelector('.recent-topics-info a:last-of-type').getAttribute('href'),
				topicId = url.slice(url.lastIndexOf('=')+1);
			topicList[i].classList.add('rtid-'+topicId)
			}

		for (var i=0;i<excludeList.length;i++) { // remove excluded forums
			document.querySelectorAll('#recent-topics .rtid-'+excludeList[i]).forEach(e => e.parentNode.removeChild(e))
		}
		document.querySelectorAll('#recent-topics tr:nth-of-type('+topicMax+') ~ tr').forEach(e => e.parentNode.removeChild(e)) // Limit to topicMax

		sessionStorage.setItem('cachedRecentTopics', JSON.stringify(document.querySelector('#recent-topics').innerHTML))
	} else if (sessionStorage.getItem('cachedRecentTopics')) {
		document.querySelector(appendLocation).innerHTML = JSON.parse(sessionStorage.getItem('cachedRecentTopics'))
	}
})
