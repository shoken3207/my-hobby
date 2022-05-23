// スライドショー
class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, 
            {
                // Optional parameters
                // direction: 'vertical',
                loop: true,
                grabCursor:true,
                effect:'coverflow',
                centeredSlides: true,
                slidesPerView:1,
                speed:1000,
                breakpoints:{
                    1024:{
                        slidesPerView:2,
                    }
                },
            }
        );
    }

    // main.jsで呼び出した時の引数をoptionsとして合わせてスライドショーを開始する
    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    // スライドショーをストップする
    stop() {
        this.swiper.autoplay.stop();
    }
}