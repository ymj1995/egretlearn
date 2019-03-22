//游戏準備
class StartGameLayer extends egret.Sprite{
    public constructor(){
        super();//获取最近的一个父类
        this.init();
    }
    private init(): void {
        let sky = this.createBitmapByName("game_bg_jpg");
        this.addChild(sky);
        sky.width = GameApp.stageW;
        sky.height = GameApp.stageH;


        // let button = new eui.Button();
        let button = this.createBitmapByName("start_game_jpg");
        button.x = GameApp.stageW/2-button.width/2;
        button.y = GameApp.stageH/2+300;
        // button.horizontalCenter = 0;
        // button.verticalCenter = 0;
        this.addChild(button);
        button.touchEnabled = true;//bitmap设置之后才能触发点击
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    private onButtonClick() {
        GameControl.Instance.onGameHandler();
    }
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}