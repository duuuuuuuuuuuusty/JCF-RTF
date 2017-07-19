$(function() { //Recent topics filter, Dusty@forum.jcink.com
	var exclusions = [0,1,2,3,4], //Forum IDs to be not included
		rtmax = 5, //Max number of displayed forums, after exclusions
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
		localStorage.setItem('recenterest', JSON.stringify($('#recent-topics').html()))
	} else {
		$('#recent-topics').html(JSON.parse(localStorage.getItem('recenterest')))
	}
})
