//游戏管理
class GameControl extends egret.Sprite{
    private static _instance:GameControl;
    public static get Instance(){
        //如果没有实例，就new一个对象
        if (!GameControl._instance){
            GameControl._instance = new GameControl;
        }
        return GameControl._instance;
    }
    //当前场景
    private currentStage:egret.DisplayObjectContainer;//一个显示容器
    //开始场景
    private StartGame:StartGameLayer;
    //游戏场景
    private GameScene:GameSceneLayer;
    //结束场景
    private GameOver:GameOverLayer;
    private bgImg:egret.Bitmap;
    public constructor(){
        super();
        this.StartGame = new StartGameLayer();
        this.GameScene = new GameSceneLayer();
        this.GameOver = new GameOverLayer();
    }

	public setStageHandler(stage:egret.DisplayObjectContainer):void {
		/**设置当前场景的背景 */
		this.currentStage = stage;
		this.bgImg = this.createBitmapByName("game_bg_jpg");
		this.bgImg.width = GameApp.stageW;
		this.bgImg.height = GameApp.stageH;
        console.log(this.bgImg.width)
        console.log(this.bgImg.height)
		//把背景添加到当期场景
		this.currentStage.addChild(this.bgImg);
	}

    public onGameStartHandler():void{
        if (this.StartGame && this.StartGame.parent){
            this.currentStage.removeChild(this.StartGame);
        }
        if (this.GameOver && this.GameOver.parent){
            this.currentStage.removeChild(this.GameOver);
        }
		this.currentStage.addChild(this.GameScene);
		// GameApp.xia.visible = false;
    }

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}