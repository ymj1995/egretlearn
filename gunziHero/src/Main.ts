//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {
    private stageW:number = 0;
    private stageH:number = 0;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。 
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        // let sky = this.createBitmapByName("bg_jpg");
        //  获取屏幕大小
        this.stageW = this.stage.stageWidth;
        this.stageH = this.stage.stageHeight;
        var stageW = this.stageW;
        var stageH = this.stageH;
        //  添加背景
        // var bg = new (false);
        // this.addChild(bg);
        this.BgLayer(false);
        // 添加標題
        var title = this.createBitmapByName("uires_1_png");
        this.addChild(title);
        title.anchorOffsetX = title.width/2;
        title.anchorOffsetY = title.height/2;
        title.x = stageW/2;
        title.y = stageH/2;
        // 添加開始按鈕
        var startBtn = this.createBitmapByName("uires_2_png")
        this.addChild(startBtn);
        startBtn.anchorOffsetX = startBtn.width/2;
        startBtn.anchorOffsetY = startBtn.height/2;
        startBtn.x = stageW/2;
        startBtn.y = stageH/2;
        startBtn.touchEnabled = true;
        startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.startBtnCallback, this);
    }
    //点击开始按钮后
    private startBtnCallback(): void {
        this.stage.removeChild(this);
        
    }
    private bg1:egret.Bitmap;
    private bg2:egret.Bitmap;
    public timer:egret.Timer;

    protected BgLayer(bgMove:boolean): void {
        var bgIndex = Math.floor(Math.random()*5 + 1);
        var bg1 = this.createBitmapByName("bg" + bgIndex + "_jpg");
        bg1.width = this.stageW;
        bg1.height = this.stageH;
        this.addChild(bg1);
        this.bg1 = bg1;
        //  添加背景移动
        if(bgMove){
            var bg2 = new egret.Bitmap();
            bg2.texture = RES.getRes("bg" + bgIndex + "_jpg");
            bg2.width = this.stageW;
            bg2.height = this.stageH;
            this.addChild(bg2);
            bg2.x = bg1.width;
            this.bg2 = bg2;
            //  创建计时器，不停地更新背景
            // var timer = new egret.Timer(300, 0);
            // timer.addEventListener(egret.TimerEvent.TIMER,this.bgMove,this);
            // this.timer = timer;
            // timer.start();
        }
        // 背景图2要添加月亮
        if (bgIndex == 2) {
            var moon = new egret.Bitmap();
            moon.texture = RES.getRes("moon_png");
            this.addChild(moon);
            moon.y = moon.height/10;
        }
    }
    // // 背景循环滚动
    // protected bgMove():void {
    //         console.log("333")

    //     var bg1 = this.bg1;
    //     var bg2 = this.bg2;
    //     bg1.width = this.stageW;
    //     bg1.height = this.stageH;
    //     bg2.width = this.stageW;
    //     bg2.height = this.stageH;
    //     // 获取两张背景图的x坐标
    //     var x1 = bg1.x;
    //     var x2 = bg2.x;
    //     // 每秒移动距离(像素)
    //     var speed = 1;
    //     x1 -= speed;
    //     x2 -= speed;

    //     // 图片宽度
    //     var bgWidth = bg1.width;

    //     // 如果第一张背景图完全移出到屏幕外，则将第二张图片放置在屏幕正中间，将第一张图片放到第二张图片后面
    //     if (x1 <= -bgWidth) {
    //         x2 = 0;
    //         x1 = bgWidth;
    //     }

    //     // 如果第二张背景图完全移出到屏幕外，则将第一张图片放置在屏幕正中间，将第二张图片放到第一张图片后面
    //     if (x2 <= -bgWidth) {
    //         x1 = 0;
    //         x2 = bgWidth;
    //     }

    //     // 重新设置背景图片位置
    //     bg1.x = x1;
    //     bg2.x = x2;
    // }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        let panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    }
}
