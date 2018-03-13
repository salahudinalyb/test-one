$(document).ready(function(){

	$(window).scroll(function() {
		const $judul = $('.title');
		const $gambar = $('.bg-prlx');
		const $ucapan = $('.hai h1');

		var wScroll = $(this).scrollTop();
		if(wScroll > 160) {
			$judul.fadeOut(400);
		} else if(wScroll < 217) {
			$judul.fadeIn(400);
		}
		
		if(wScroll > 200) {
			$gambar.css({
				'backgroundPositionY' : ''+ wScroll/40 +'%'
				// 'tarnsform' : 'translate(0px, '+ wScroll/100 +'%)'
			})
		}

		if(wScroll > 660) {
			$ucapan.slideDown();
		} else if(wScroll < 817) {
			$ucapan.slideUp();
		}

		console.log(wScroll);
	})

	$('.gambar').first().addClass('active');
	
	// nyembunyiin seluruh slide
	$('.gambar').hide();
	
	// nampilin slide pertamo
	$('.active').show();
	
	// tombol next handler
	$('#selanjutnya').on('click', nextSlide);
	
	// tombol prev handler
	$('#sebelum').on('click', prevSlide);
	
	// fungsi pergantian slide untuk next slide tombol
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.gambar').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.gambar').hide();
		$('.active').show();
	}
	
	// fungsi pergantian slide untuk prev slide tombol
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.gambar').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.gambar').hide();
		$('.active').show();
	}
        });
	
	// nampilin slide pertana
	$('.active').show();
	
	// Next Handler
	$('#selanjutnya').on('click', nextSlide);
	
	// Prev Handler
	$('#sebelum').on('click', prevSlide);