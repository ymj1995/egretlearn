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
/**
 */
var Stick = (function (_super) {
    __extends(Stick, _super);
    function Stick(kind) {
        var _this = _super.call(this) || this;
        _this.init(kind);
        return _this;
    }
    Stick.prototype.init = function (kind) {
        this.stageH = egret.MainContext.instance.stage.stageHeight;
        this.stageW = egret.MainContext.instance.stage.stageWidth;
        this.growRate = 6;
        //  锚点为右下角
        if (kind == 1) {
            var stickSprite = new egret.Bitmap();
            stickSprite.texture = RES.getRes("stick1_png");
            this.addChild(stickSprite);
            stickSprite.scaleX = 2;
            this.stickSprite = stickSprite;
            this.anchorOffsetX = stickSprite.width;
            this.anchorOffsetY = stickSprite.height;
            var timer = new egret.Timer(1000 / 60, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, this.growHeight, this);
            this.timer = timer;
        }
        else if (kind == 2) {
            var stickSprite = new egret.Bitmap();
            stickSprite.texture = RES.getRes("propres4_png");
            this.addChild(stickSprite);
            stickSprite.width = 4;
            stickSprite.height = 4;
            stickSprite.scaleY = 2.2;
            this.stickSprite = stickSprite;
            this.anchorOffsetY = 0.8 * stickSprite.height;
            var timer = new egret.Timer(1000 / 60, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, this.growWidth, this);
            this.timer = timer;
        }
    };
    //  朝上变长
    Stick.prototype.growHeight = function () {
        // 如果长度超过屏幕高的一半，则不再变长
        if (this.stickSprite.height * this.scaleY >= this.stageH / 2) {
            console.log("growth end");
            return;
        }
        this.scaleY += this.growRate;
    };
    //  朝右变长
    Stick.prototype.growWidth = function () {
        // 如果长度超过屏幕高的一半，则不再变长
        if (this.stickSprite.width * this.scaleX >= this.stageH / 2) {
            console.log("growth end");
            return;
        }
        this.scaleX += this.growRate;
    };
    return Stick;
}(egret.Sprite));
__reflect(Stick.prototype, "Stick");
//# sourceMappingURL=Stick.js.map