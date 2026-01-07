$(function () {
    $('header ul li').click(function () {
        $('header ul li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let sectionD = $('main .item').eq(idx).offset().top

        $('html, body').animate({
            scrollTop: sectionD
        })
    })

    $(window).scroll(function () {
        $('main .item').each(function () {
            if ($(this).offset().top <= $(window).scrollTop()) {
                let idx = $(this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
        }) 
    })
})

$(function () {
    // alert('dddddddddddddddddddddddddd')

    // 윈도우 스크롤 했을 때 할일
    $(window).scroll(function () {
        // 만약에 윈도우 스크롤탑이 300이상이면
        if ($(window).scrollTop() >= 300) {
            // 고탑이 스르륵 나와
            $('.gotop').fadeIn()
        } else { // 아니면
            // 고탑이 스르륵 사라져
            $('.gotop').fadeOut()
        }
    })

    // 고탑버튼 클릭했을 때 할일
    $('.gotop').click(function(e){
        e.preventDefault() // 이벤트 차단
        // 고탑버튼누르면 => scrollTop : 0 이동
        $('html, body').animate({
            scrollTop : 0
        },700)
    })
})

$(function(){
    $('.question').click(function(){
        $(this).next().slideToggle().siblings('.answer').slideUp()
        // 클릭한 그 질문 바로 옆에 있는 애(answer)가 슬라이드토글되고 나머지 answer 다 슬라이드 업돼라
        // $('.answer').slideUp()
        // $(this).next().slideToggle()
        
    })
})