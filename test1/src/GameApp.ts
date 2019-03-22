class GameApp extends egret.DisplayObjectContainer {
	public constructor() {
		super();

		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
	}

	// public static xia:egret.DisplayObject = new egret.DisplayObject();
	public static stageW:number;
	public static stageH:number;
	private addStage() {
        //在监听ADDED_TO_STAGE事件下才能使用stage
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        console.log(stageW)
        console.log(stageH)
        GameApp.stageW = stageW;
        GameApp.stageH = stageH;

		GameControl.Instance.setStageHandler(this);
        //游戏开始界面
        GameControl.Instance.onGameStartHandler();
	}

    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}