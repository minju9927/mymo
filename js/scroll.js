$(function () {//jquery start

    const scrollMotion = function () {

        const $header = $('header')

        if ($header.hasClass('scroll')) {

            const fixedTarget = $('.fixed-area')

            let target01 = Math.floor($('.motion-scroll.bg01').offset().top)
            let target02 = Math.floor($('.motion-scroll.bg02').offset().top)
            let target03 = Math.floor($('.motion-scroll.bg03').offset().top)
            let target04 = Math.floor($('.motion-scroll.bg04').offset().top)


            let scrY = Math.floor(window.scrollY)

            // console.log(scrY)

            let rollingTarget01 = fixedTarget.find('.item-01')
            let rollingTarget02 = fixedTarget.find('.item-02')
            let rollingTarget03 = fixedTarget.find('.item-03')
            let rollingTarget04 = fixedTarget.find('.item-04')


            let contIdx = fixedTarget.find('.current-idx')

            let descCont = fixedTarget.find('.right').find('li')

            let rollingEndTarget = Math.floor($('.content-wrap').offset().top) - 900


            const targets = [target01, target02, target03, target04]
            const rollingTargets = [null, rollingTarget02, rollingTarget03, rollingTarget04]


            for (let i = 0; i < targets.length; i++) {
                if (scrY >= targets[i]) {
                    contIdx.text(`0${i + 1}`)
                    $(descCont[i]).addClass('on').siblings().removeClass('on')

                    if (i > 0) {
                        rollingTargets[i].css({
                            'transform': 'translateY(-100%)',
                        })
                    }


                } else {

                    if (i > 0) {
                        rollingTargets[i].css({
                            'transform': 'translateY(0)'
                        })
                    }

                }
            }




            if (scrY >= target01) {
                fixedTarget.addClass('fixed-on')
            } else {
                fixedTarget.removeClass('fixed-on')

            }


            if (scrY >= rollingEndTarget) {
                fixedTarget.addClass('fixed-end')
            } else {
                fixedTarget.removeClass('fixed-end')

            }

        }


    }


    const maxFixedScroll = function () {
        let fixedArea = $('.fixed-area')
        if (fixedArea.hasClass('fixed-on')) {
            fixedArea.css({
                'left': -$(this).scrollLeft()
            })
        }
    }

    $(document).on('focusin', '.fixed-area a.main-btn', function () {
        const targets = [
            Math.floor($('.motion-scroll.bg01').offset().top),
            Math.floor($('.motion-scroll.bg02').offset().top),
            Math.floor($('.motion-scroll.bg03').offset().top),
            Math.floor($('.motion-scroll.bg04').offset().top),

        ]

        let movePos = $(this).closest('li').index()

        if (movePos >= 0 && movePos < targets.length) {
            window.scrollTo({
                top: targets[movePos],
                behavior: 'smooth'
            })
        }


    })




    $(window).scroll(function () {
        scrollMotion()
        maxFixedScroll()
    })


})//jquery end