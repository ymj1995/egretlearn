var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//游戏管理
var GameControl = (function (_super) {
    __extends(GameControl, _super);
    function GameControl() {
        var _this = _super.call(this) || this;
        _this.StartGame = new StartGameLayer();
        _this.GameScene = new GameSceneLayer();
        _this.GameOver = new GameOverLayer();
        return _this;
    }
    Object.defineProperty(GameControl, "Instance", {
        get: function () {
            //如果没有实例，就new一个对象
            if (!GameControl._instance) {
                GameControl._instance = new GameControl;
            }
            return GameControl._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameControl.prototype.setStageHandler = function (stage) {
        /**设置当前场景的背景 */
        this.currentStage = stage;
        this.bgImg = this.createBitmapByName("game_bg_jpg");
        this.bgImg.width = GameApp.stageW;
        this.bgImg.height = GameApp.stageH;
        console.log(this.bgImg.width);
        console.log(this.bgImg.height);
        //把背景添加到当期场景
        this.currentStage.addChild(this.bgImg);
    };
    GameControl.prototype.onGameStartHandler = function () {
        if (this.StartGame && this.StartGame.parent) {
            this.currentStage.removeChild(this.StartGame);
        }
        if (this.GameOver && this.GameOver.parent) {
            this.currentStage.removeChild(this.GameOver);
        }
        this.currentStage.addChild(this.GameScene);
        // GameApp.xia.visible = false;
    };
    GameControl.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GameControl;
}(egret.Sprite));
__reflect(GameControl.prototype, "GameControl");
//# sourceMappingURL=GameControl.js.map