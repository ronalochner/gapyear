//make sure the elements are ready

$(document).ready(function(){



//Makes things draggable

		$('.draggableDiv').draggable({
			containment : '#containerDiv',
			cursor: 'move',
			stack: '.draggableDiv',
			revert: 'invalid'
			
		});

// brings draggable element to top on mouse down event

		$('.draggableDiv').mousedown(function() {
			var maxZindex = 0;
			$(this).siblings ('.draggableDiv').each(function(){
				var currentZindex = Number ($(this).css('z-index'));
				maxZindex = currentZindex > maxZindex ? currentZindex : maxZindex;
				
			});

			$(this).css (z-index,maxZindex+1);

		});


		$('.divClass2').droppable({
			accept: 'img[data-value="pack"]',

				over: function (event,ui){
					$(this).addClass('highlight');
				},
				out: function (event,ui){
					$(this).removeClass('highlight');
				},
				drop: function (event,ui) {
					$(this).remove('highlight');
				}
		});

				$('.divClass3').droppable({
			accept: 'img[data-value="pack"]',

				over: function (event,ui){
					$(this).addClass('highlightstamps');
				},
				out: function (event,ui){
					$(this).removeClass('highlightstamps');
				},
				drop: function (event,ui) {
					$(this).remove('highlightstamps');
				}
		});

	});

