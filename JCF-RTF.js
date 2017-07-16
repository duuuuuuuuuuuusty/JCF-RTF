$(function() { //Recent topics filter, Dusty@forum.jcink.com
	var exclusions = [0,1,2,3,4], //Forum IDs to be not included
		rtmax = 5, //Max number of displayed forums, after exclusions
		tdrop = $('new-recent-topics-location'), //Location to append recent topics to
		act = '<!-- |input_act| -->';
	if (act === 'idx') {
		$('#recent-topics table tbody tr').each(function() {
			var id = $(this).find('.recent-topics-info a:last-of-type').attr('href');
			$(this).addClass('rtid' + (id.slice(id.lastIndexOf('=') + 1)))
		})
		for (var i = 0; i < exclusions.length; i++) {
			$('#recent-topics tr.rtid' + exclusions[i] + '').remove();
		}
		$('#recent-topics table tbody tr:nth-of-type(' + rtmax + ') ~ tr').remove()
		$('#recent-topics table tbody tr').each(function() {
			var t = $(this),
				topicurl = t.find('.recent-topics-info a:first-of-type').attr('href'),
				topicname = t.find('.recent-topics-info a:first-of-type strong').text(),
				authurl = t.find('.recent-topics-info a:nth-of-type(2)').attr('href'),
				authname = t.find('.recent-topics-info a:nth-of-type(2)').text(),
				datestr = t.find('.recent-topics-date').text();
			$(tdrop).append('<li><a href="' + topicurl + '" title="' + datestr + '">' + topicname + '</a> by <a href="' + authurl + '">' + authname + '</a></li>')
		})
		sessionStorage.setItem('recenterest', JSON.stringify($(tdrop).html()))
	} else {
		$(tdrop).html(JSON.parse(sessionStorage.getItem('recenterest')))
	}
})
