
        $(function() {
            // ハンバーガーメニュー
            $('.hamburger').click(function() {
                $(this).toggleClass('active');
        
                if ($(this).hasClass('active')) {
                    $('.globalMenuSp').addClass('active');
                } else {
                    $('.globalMenuSp').removeClass('active');
                } 
            
            });
        
        //メニュー内を閉じておく
            $('.globalMenuSp a[href]').click(function() {
                $('.globalMenuSp').removeClass('active');
            $('.hamburger').removeClass('active');

            });


        //上に戻るボタン
        $("#js-pagetop").click(function () {
            $('html, body').animate({
            scrollTop: 0
            }, 300);
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 1) {
            $('#js-pagetop').fadeIn(300).css('display', 'flex')
            } else {
            $('#js-pagetop').fadeOut(300)
            }
        });

        // ヒーロースライド
        const slide = document.getElementById('slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const indicator = document.getElementById('indicator');
        const lists = document.querySelectorAll('.list');
        const totalSlides = lists.length;
        let count = 0;
        let autoPlayInterval;
        function updateListBackground() {
        for (let i = 0; i < lists.length; i++) {
            lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
        }
        }
        function nextClick() {
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count++;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
        }
        function prevClick() {
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count--;
        if (count < 0) count = totalSlides - 1;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
        }
        function startAutoPlay() {
        autoPlayInterval = setInterval(nextClick, 3000);
        }
        function resetAutoPlayInterval() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
        }
        next.addEventListener('click', () => {
        nextClick();
        resetAutoPlayInterval();
        });
        prev.addEventListener('click', () => {
        prevClick();
        resetAutoPlayInterval();
        });
        indicator.addEventListener('click', (event) => {
        if (event.target.classList.contains('list')) {
            const index = Array.from(lists).indexOf(event.target);
            slide.classList.remove(`slide${count % totalSlides + 1}`);
            count = index;
            slide.classList.add(`slide${count % totalSlides + 1}`);
            updateListBackground();
            resetAutoPlayInterval();
        }
        });
        startAutoPlay();



        // 製造過程
        function toggleChangeBtn() {
            var slideIndex = $('.cslide').index($('.active'));
            $('.change-btn').show();
            if (slideIndex == 0) {
            $('.prev-btn').hide();
            // 「3」の部分を、lengthメソッドを用いて書き換えてください
            } else if (slideIndex == $('.cslide').length-1) {
            $('.next-btn').hide();
            }
        }
        
        $('.index-btn').click(function() {
            $('.active').removeClass('active');
            var clickedIndex = $('.index-btn').index($(this));
            $('.cslide').eq(clickedIndex).addClass('active');
            toggleChangeBtn();
        });
        
        $('.change-btn').click(function() {
            var $displaySlide = $('.active');
            $displaySlide.removeClass('active');
            if ($(this).hasClass('next-btn')) {
            $displaySlide.next().addClass('active');
            } else {
            $displaySlide.prev().addClass('active');
            }
            toggleChangeBtn();
        });

        // FAQのアコーディオン
        $('.faq-list-item').click(function() {
            let $answer = $(this).find('.answer');
            if($answer.hasClass('open')) { 
            $answer.removeClass('open');
            // $answerを隠
            $answer.slideUp();

            // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
            $(this).find('span').text('+');
            
            } else {
            $answer.addClass('open');
            // slideDownメソッドを用いて、$answerを表示してください
            $answer.slideDown();
            
            // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
            $(this).find('span').text('-');
            
            }
        });
});
