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
var GameApp = (function (_super) {
    __extends(GameApp, _super);
    function GameApp() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    GameApp.prototype.addStage = function () {
        //在监听ADDED_TO_STAGE事件下才能使用stage
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        console.log(stageW);
        console.log(stageH);
        GameApp.stageW = stageW;
        GameApp.stageH = stageH;
        GameControl.Instance.setStageHandler(this);
        //游戏开始界面
        GameControl.Instance.onGameStartHandler();
    };
    GameApp.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return GameApp;
}(egret.DisplayObjectContainer));
__reflect(GameApp.prototype, "GameApp");
//# sourceMappingURL=GameApp.js.map