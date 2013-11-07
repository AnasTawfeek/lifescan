$(document).ready(function(){	
	
	var territoryCode = 'empty';
	
	var selectedCount = 0;
	var bayerActive=false;
	var abbottActive=false;
	var rocheActive=false;
	
	function jump(page)
	{
		$('.animationLayer').fadeOut();
		$('.contentLayer').fadeOut( function(){				  					
			document.location = page;			
		});	
	};
	
	$('.nav').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		jump("6.8.2.html");			
	});
		
	function parseValue(val)
	{
		var returnVal;
		//console.log(val.length);
		if(val.length > 0)
		{
			switch( val )
			{
				case 'Preferred':
					returnVal = '$';
					break;
				case 'Non Formulary':
					returnVal = '$$';
					break;
				case 'Not Covered':
					returnVal = '$$$';
					break;
				default: '';
			}
		}
		else
			returnVal = '';
			
		return returnVal;			
	};
	
	function buildTable(array){
		
		// reset selected states of previous rows (.csv coverage data)...
		if($('#coverageTable tbody').has('tr'))
		{			
			$('.row').removeClass('selected');
			$('#coverageTable tbody tr').remove();
		}
		
		var rows;
		
		for (var i =0; i< 10; i++) {			
	
			var dr = array.splice(0,5);
			
			rows += '<tr class="row">';
			rows += '<td class="col1"><span style="font-family:Avenir; font-size:13px;">'+ dr[0] +'</span></td>';
			rows += '<td class="col2"><span class="thead2 white">'+ parseValue( dr[1] ) +'</span></td>';
			rows += '<td class="col3"><span class="thead2 dark-gray bayer">'+ parseValue( dr[2] ) +'</span></td>';
			rows += '<td class="col4"><span class="thead2 dark-gray abbott">'+ parseValue( dr[3] ) +'</span></td>';
			rows += '<td class="col5"><span class="thead2 dark-gray roche">'+ parseValue( dr[4] ) +'</span></td>';				
			rows += '</tr>';		
			rows += '<tr class="row-spacer"><td colspan="5"></td></tr>';
		}
	
		bayerActive = false;
		abbottActive = false;
		rocheActive = false;
		
		$('#coverageTable tbody').append(rows);		
	};	
		
	$('.row').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
						
		var row = $(this);	
		var cols = row.children('td').children('span');	
						
		if ( row.hasClass('selected') )
		{			
			if(bayerActive)	
				$( cols[2] ).removeClass('selected');
			if(abbottActive)	
				$( cols[3] ).removeClass('selected');
			if(rocheActive)	
				$( cols[4] ).removeClass('selected');											
					
			row.removeClass('selected');	
		}
		else
		{
			row.addClass('selected');
			
			if(bayerActive)	
				$( cols[2] ).addClass('selected');
			if(abbottActive)	
				$( cols[3] ).addClass('selected');
			if(rocheActive)	
				$( cols[4] ).addClass('selected');	
		}		
	});
	
	
	$('#btn-bayer').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
						
		bayerActive = !bayerActive;
		var cols = $('.bayer');
		
		cols.each(function(index, element) {
			var col = $(this);
			var row = col.parent().parent();
			////console.log(row);
			if(row.hasClass('selected') )
			{
				if ( col.hasClass('selected') )
					col.removeClass('selected');
				else
					col.addClass('selected');
			}						
		});
	});	
		
	$('#btn-abbott').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		abbottActive = !abbottActive;		
		var cols = $('.abbott');
		
		cols.each(function(index, element) {
			var col = $(this);
			var row = col.parent().parent();
			//console.log(row);
			if(row.hasClass('selected') )
			{
				if ( col.hasClass('selected') )
					col.removeClass('selected');
				else
					col.addClass('selected');
			}						
		});
	});
		
	$('#btn-roche').live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
						
		rocheActive = !rocheActive;
		var cols = $('.roche');
		
		cols.each(function(index, element) {
			var col = $(this);
			var row = col.parent().parent();
			//console.log(row);
			if(row.hasClass('selected') )
			{
				if ( col.hasClass('selected') )
					col.removeClass('selected');
				else
					col.addClass('selected');
			}						
		});			
	});			
		
	// custom dropdown button...
	var listIsHidden = true;
	$(".dropdown dt a").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		//console.log("tap");
		//$(".dropdown dd ul").toggle();
		var list = $(".dropdown dd ul");
		
		if (listIsHidden)
			list.show();
		else
			list.hide();
			
		listIsHidden = !listIsHidden;
	});
				
	$(".dropdown dd ul li a").live('touchstart click', function(e){
		e.stopPropagation(); e.preventDefault();
		
		var text = $(this).html();
		$(".dropdown dt a span").html(text);
		$(".dropdown dd ul").hide();
		listIsHidden = !listIsHidden;
		
		territoryCode = getSelectedValue();
		// save selection for next time...
		localStorage.setItem("last_tc", territoryCode);
		localStorage.setItem("last_tcval", text);
		
		loadCoverage();
	});
				
	function getSelectedValue(id) {
		return $("#ddlRegion").find("dt a span.value").html();
	}

	// simulated "onblur" event...	
	$(document).live('touchstart click', function(e) {
		e.stopPropagation(); e.preventDefault();
		
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("dropdown"))
			$(".dropdown dd ul").hide();
	});

	
	function loadCoverage()
	{			
		//var code = territoryCode.substr(0,2);		
		var csv;	
		
		switch(territoryCode)
		{
			case 'SC':
				csv = "res/coverage/SC.csv";
				break;
			case 'NC':
				csv = "res/coverage/NC.csv";
				break;
			case 'NE':
				csv = "res/coverage/NE.csv";
				break;
			case 'SE':
				csv = "res/coverage/SE.csv";
				break;
			case 'WE':
				csv = "res/coverage/WE.csv";
				break;
			default:
				csv = "res/coverage/empty.csv";
				break;			
		}
		
		//console.log("csv = "+ csv);		
		
		$.get (csv, null, function (data) {	
			
			var array = $.csv.toArray(data);
			buildTable(array);		
				
		});	
		
	}
	
	// check for a cached territory selection...
	var cachedTerritoryCode = localStorage.getItem("last_tc");
	var cachedTerritoryValue = localStorage.getItem("last_tcval");
	if(cachedTerritoryCode != null && cachedTerritoryValue != null)
	{
		territoryCode = cachedTerritoryCode;		
		$(".dropdown dt a span").html(cachedTerritoryValue);
	}
	
	$('.animationLayer').fadeIn();
	$('.contentLayer').fadeIn();		
	
	// load default coverage...	
	loadCoverage();
});