$(function(){
    const $navTap = $('header>div>nav>.gnb>li>a');
    const $langBox = $('header>div>nav');
    const $langonBox = $('header>div>nav.on');
    const $langType = $("header>div>nav>.lang>h2>a")
    const $langSelect = $("header>div>nav>.lang>ul>li>a")
    const $indctBtn = $('section>.indicator>li>a');

    $navTap.on('click',function(){
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
    });

    $langType.on('click', function(evt){
        evt.preventDefault();
        $langBox.addClass('on')
    });

    $('section').on('click', function(){
        $langBox.removeClass('on');
    });
    
    $langSelect.on('click', function(){
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');
        $langBox.removeClass('on');
    });

    $indctBtn.on('click', function(){
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');

        const $nowIdx = $indctBtn.index(this);
        console.log($nowIdx)
        $('section>.slide-banner>li').eq(0).animate({
            marginLeft : -2700 * $nowIdx
        });
    });
});