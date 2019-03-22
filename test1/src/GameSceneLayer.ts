//游戏中
class GameSceneLayer extends egret.Sprite{
    public constructor(){
        super();//获取最近的一个父类
        this.init();
    }
    private stLabel;
    private jdLabel;
    private buLabel;
    private qtImg:egret.Bitmap;
    private jdImg:egret.Bitmap;
    private buImg:egret.Bitmap;

    private init(): void {
        let sky = this.createBitmapByName("green_png");
        this.addChild(sky);
        sky.width = GameApp.stageW;
        sky.height = GameApp.stageH;

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
    }
    private onjdButtonClick() {
        this.stLabel.visible = false;
        this.jdLabel.visible = false;
        this.buLabel.visible = false;
        this.jdImg.visible = true;
    }
    private onbuButtonClick() {
        this.stLabel.visible = false;
        this.jdLabel.visible = false;
        this.buLabel.visible = false;
        this.buImg.visible = true;
    }
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}