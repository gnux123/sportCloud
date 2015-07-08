$(function(){

	//header gameLists
	$(".gamesShowWrap").slick({
		dots: false,
		draggable: false,
		lazyLoad: 'ondemand',
  	slidesToShow: 6,
  	slidesToScroll: 1
	});

	var _subNavs = $(".subNavs");

	_subNavs.hide();
	$(".cates > li a").hover(function(){
		var _name = $(this).attr("href").split(".")[0];

		$(this).parent("li")
			   .addClass("active")
			   .siblings("li.active")
			   .removeClass("active");

		if(_name === "#" || _name === " " || _name === "javascript:void(0);" || _name === "profiles") {
			_subNavs.hide();
		}else{
			_subNavs.show();
			_subNavs.find("ul."+_name).show().siblings("ul").hide();
		}

	});


	//scores content tabs effect
	var _ul = $(".scoreNav > ul > li"),
			_scoreContent = $(".scoresContent div");

	_ul.eq(0).addClass("active");

	_ul.click(function(){
		var _index = $(this).index();
		$(this).addClass("active").siblings(".active").removeClass("active");

		_scoreContent.hide();
		_scoreContent.eq(_index).show();
	});


	$('.photolibCover').slick({
		dots: true,
		customPaging: function(slider, i) {
			return '<button class="img-tab"><img src="images/thumbnails-' + (i+1) + '.jpg"></button>';
		}
	});

	//slideNews Function
	$.fn.slideNews = function() {
			var slider = this,
					_sliderHtml = slider.html(),
					_width = slider.width(),
					_length = slider.find("div").length;

			slider.html("<div class='slideContent'>"+ _sliderHtml +"</div>");
			slider.after("<div class='slideNavs'><ul></ul></div>");

			var _navs = $(".slideNavs > ul");

			for(i=0; i<_length; i++) {
				var thisParent = slider.find(".slideContent").children("div");
				var subText = thisParent.eq(i).find("a img").attr("alt"),
						link = thisParent.eq(i).find("a").attr("href");

				_navs.append("<li class='slidenav-"+i+"'><a href='"+ link +"'>"+subText+"</a></li>");
			}

			_navs.children("li").eq(0).addClass("active");
			_navs.children("li").hover(function(){
				var slideIndex = $(this).index();
				slider.find(".slideContent").css("-webkit-transform","translate3d(-"+ slideIndex*_width +"px,0,0)");
				$(this).addClass("active").siblings("li.active").removeClass("active");
			});
	}

	$(".slideNewsMain").slideNews();



	//filter slides
	var videoSlider = $(".videoShowRoom");

	videoSlider.slick({
		dots: true,
		arrows: false,
		speed: 180,
        fade: true,
        cssEase: 'linear',
        customPaging: function(slides, i) {
        	var targetShow = videoSlider.find(".slick-slide").eq(i);
        	var text = targetShow.find("h3").text();
        	var getURL = targetShow.find("iframe").attr("src"),
        		videoCode = getURL.split("/").pop();

			return '<button class="video-tab">\
			<img src="http://i.ytimg.com/vi/'+ videoCode + '/0.jpg" width="100%"><p>' + text + '</p></button>';
		}

	});


	$("#videoSelect").change(function(){
		var _val = $('#videoSelect :selected').val();

		if (_val === 'all') {
			videoSlider.slick('slickUnfilter');
		} else if (_val === 'hot') {
			videoSlider.slick('slickFilter','.hot');
		} else if (_val === 'live') {
			videoSlider.slick('slickFilter','.live');
		}
	});


	//focusPesrson select
	$(".fpNavs li").click(function(){
		var fpIndex = $(this).index();
		$(this).addClass("active").siblings(".active").removeClass("active");
		$(".fpZones").eq(fpIndex).show().siblings(".fpZones").hide();
	});

	$(".fpZones > ul > li a").hover(function(){
		var _parent = $(this).parent("li");
		_parent.addClass("current").siblings("li.current").removeClass("current");
	});


});
