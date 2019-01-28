let Img = {
	/**
	 * 查看大图
	 * @return {[type]} [description]
	 */
	showBigImages: function(arr,imgCode){
        $.fancybox.open(arr, {
            loop: true,
            infobar: true,
            protect: false,
            autoFocus: false,
            slideShow: {
                autoStart: false,
                speed: 2000
            },
            thumbs: {
                autoStart: true
            }
        });
    },

    /**
     * 查看大图
     * @param  {[type]} $target [description]
     * @param  {[type]} event   [description]
     * @return {[type]}         [description]
     */
    fnImgLarge: function($target,event,that){
        let id = $target.attr('data-id');
        let flag = $target.attr('data-flag');
        if (flag) {
            let imgs = $target.attr('data-href');
            let imgArr = JSON.parse(imgs);
        }else{
            let imgs = $target.attr('data-href').split(',');
            var imgArr = [];
            $.each(imgs,function(index, item) {
                let imgObj = {};
                imgObj.src = item;
                imgObj.thumb = item;
                imgArr.push(imgObj);
            });
        }
        // 如果有缓存，直接打开大图
        if(imgArr){
            this.showBigImages(imgArr);
            return;
        }
    },
};
export default Img;

