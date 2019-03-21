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
var StartGameLayer = (function (_super) {
    __extends(StartGameLayer, _super);
    function StartGameLayer() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    StartGameLayer.prototype.init = function () {
        var sky = this.createBitmapByName("game_bg_jpg");
        this.addChild(sky);
        sky.width = GameApp.stageW;
        sky.height = GameApp.stageH;
        // let button = new eui.Button();
        var button = this.createBitmapByName("start_game_jpg");
        button.x = GameApp.stageW / 2 - button.width / 2;
        button.y = GameApp.stageH / 2 + 300;
        // button.horizontalCenter = 0;
        // button.verticalCenter = 0;
        this.addChild(button);
        button.touchEnabled = true; //bitmap设置之后才能触发点击
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    StartGameLayer.prototype.onButtonClick = function () {
        GameControl.Instance.onGameStartHandler();
    };
    StartGameLayer.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return StartGameLayer;
}(egret.Sprite));
__reflect(StartGameLayer.prototype, "StartGameLayer");
//# sourceMappingURL=StartGameLayer.js.map