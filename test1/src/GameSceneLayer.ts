//游戏中
class GameSceneLayer extends egret.Sprite{
    public constructor(){
        super();//获取最近的一个父类
        this.init();
    }
    private DsLabel:egret.TextField;//你的对手
    private stLabel;
    private jdLabel;
    private buLabel;
    private qtImg:egret.Bitmap;
    private jdImg:egret.Bitmap;
    private buImg:egret.Bitmap;
    private xtqtImg:egret.Bitmap;
    private xtjdImg:egret.Bitmap;
    private xtbuImg:egret.Bitmap;

    private init(): void {
        let sky = this.createBitmapByName("green_png");
        this.addChild(sky);
        sky.width = GameApp.stageW;
        sky.height = GameApp.stageH;

        var DsLabel = new egret.TextField();
        DsLabel.textColor = 0xffffff;
        DsLabel.x = GameApp.stageW/2-200;
        DsLabel.y = GameApp.stageH/2-300;
        DsLabel.text = "你的对手已经想好要出剪刀了";
        DsLabel.size = 30;
        this.addChild(DsLabel);
        this.DsLabel = DsLabel;//这样写了才能在下面使用visible
        // this.DsLabel.visible = true;

        let xtqtImg = this.createBitmapByName("quantou_png");
        this.addChild(xtqtImg);
        xtqtImg.x =  GameApp.stageW/2-60;
        xtqtImg.y = GameApp.stageH/2-300;
        this.xtqtImg = xtqtImg;
        this.xtqtImg.visible = false;

        let xtjdImg = this.createBitmapByName("jiandao_png");
        this.addChild(xtjdImg);
        xtjdImg.x =  GameApp.stageW/2-60;
        xtjdImg.y = GameApp.stageH/2-300;
        this.xtjdImg = xtjdImg;
        this.xtjdImg.visible = false;

        let xtbuImg = this.createBitmapByName("bazhang_png");
        this.addChild(xtbuImg);
        xtbuImg.x =  GameApp.stageW/2-60;
        xtbuImg.y = GameApp.stageH/2-300;
        this.xtbuImg = xtbuImg;
        this.xtbuImg.visible = false;

        // var btn:egret.DisplayObject = new egret.DisplayObject();
		let qtImg = this.createBitmapByName("quantou_png");
        this.addChild(qtImg);
        qtImg.x =  GameApp.stageW/2-60;
        qtImg.y = GameApp.stageH/2+200;
        this.qtImg = qtImg;
        this.qtImg.visible = false;

		let jdImg = this.createBitmapByName("jiandao_png");
        this.addChild(jdImg);
        jdImg.x =  GameApp.stageW/2-60;
        jdImg.y = GameApp.stageH/2+200;
        this.jdImg = jdImg;
        this.jdImg.visible = false;

		let buImg = this.createBitmapByName("bazhang_png");
        this.addChild(buImg);
        buImg.x =  GameApp.stageW/2-60;
        buImg.y = GameApp.stageH/2+200;
        this.buImg = buImg;
        this.buImg.visible = false;

        var stLabel = new egret.TextField();
        stLabel.textColor = 0xffffff;
        stLabel.x = GameApp.stageW/2-60;
        stLabel.y = GameApp.stageH/2+200;
        stLabel.text = "石头";
        stLabel.size = 40;
        this.addChild(stLabel);
        this.stLabel = stLabel;//这样写了才能在下面使用visible
        stLabel.touchEnabled = true;//bitmap设置之后才能触发点击
        stLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

        var jdLabel = new egret.TextField();
        jdLabel.textColor = 0xffffff;
        jdLabel.x = GameApp.stageW/2-60;
        jdLabel.y = GameApp.stageH/2+300;
        jdLabel.text = "剪刀";
        jdLabel.size = 40;
        this.addChild(jdLabel);
        this.jdLabel = jdLabel;//这样写了才能在下面使用visible
        jdLabel.touchEnabled = true;//bitmap设置之后才能触发点击
        jdLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onjdButtonClick, this);

        var buLabel = new egret.TextField();
        buLabel.textColor = 0xffffff;
        buLabel.x = GameApp.stageW/2-60;
        buLabel.y = GameApp.stageH/2+400;
        buLabel.text = "布";
        buLabel.size = 40;
        this.addChild(buLabel);
        this.buLabel = buLabel;//这样写了才能在下面使用visible
        buLabel.touchEnabled = true;//bitmap设置之后才能触发点击
        buLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuButtonClick, this);
    }
    private onButtonClick() {
        this.stLabel.visible = false;
        this.jdLabel.visible = false;
        this.buLabel.visible = false;
        this.qtImg.visible = true;
        this.DsLabel.visible = false;
        this.getRandom(1);
    }
    private onjdButtonClick() {
        this.stLabel.visible = false;
        this.jdLabel.visible = false;
        this.buLabel.visible = false;
        this.jdImg.visible = true;
        this.DsLabel.visible = false;
        this.getRandom(2);
    }
    private onbuButtonClick() {
        this.stLabel.visible = false;
        this.jdLabel.visible = false;
        this.buLabel.visible = false;
        this.buImg.visible = true;
        this.DsLabel.visible = false;
        this.getRandom(3);
    }
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
    }


/**
     * 创建分数栏
     * create score container
     */
    private panel;
    private strResuletLabel;
    private createPanel(): void {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.x = 100;
        panel.y = 500;
        this.addChild(panel);

        var strResuletLabel = new egret.TextField();
        strResuletLabel.textColor = 0x00CED1;
        strResuletLabel.x = 100;
        strResuletLabel.y = GameApp.stageH/2;
        strResuletLabel.size = 30;
        this.addChild(strResuletLabel);
        this.strResuletLabel = strResuletLabel;//这样写了才能在下面使用visible
        this.strResuletLabel.text = "平局";
        strResuletLabel.touchEnabled = true;//bitmap设置之后才能触发点击
        strResuletLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);

    }

    private getRandom(result:number){
        let num = this.getRandomIntInclusive(1,3);
        console.log(num)
        if (num===1){
            this.xtqtImg.visible = true;
        }else if (num===2){
            this.xtjdImg.visible = true;
        }else if(num === 3){
            this.xtbuImg.visible = true;
        }
        this.createPanel();
        if(result === 1){
            if (num===1){

            }else if (num===2){
                this.strResuletLabel.text = "赢了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //赢了
            }else if (num===3){
                this.strResuletLabel.text = "输了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //输了
            }
        } 
        if(result === 2){
            if (num===1){
                this.strResuletLabel.text = "输了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //输了
            }else if (num===2){
            }else if (num===3){
                this.strResuletLabel.text = "赢了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //赢了
            }
        } 
        if(result === 3){
            if (num===1){
                this.strResuletLabel.text = "赢了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //赢了
            }else if (num===2){
                this.strResuletLabel.text = "输了啊 啊啊啊 啊啊啊啊啊啊啊啊"
                //输了
            }else if (num===3){
            }
        }         
    }
}