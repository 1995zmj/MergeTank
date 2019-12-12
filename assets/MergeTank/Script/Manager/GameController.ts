export enum GameState {
    NONE,
    IDLE,
    ANIM,
    PUSH,
    PAUSE,
    FISH,
    PULL,
    RESULT
}

export class GameController extends cc.Component{
    private static instance: GameController;
    public static getInstance(): GameController {
        if (this.instance == null) {
            this.instance = new GameController();
        }
        return this.instance;
    }

    public gameState: GameState = GameState.IDLE;

    init()
    {
        cc.log("初始化");
        cc.director.getScheduler().schedule(this.updateData, this,1);
    }

    private updateData()
    {
        cc.log("更新全局");
    }

    private curLoadedCount: number = 0;
    private sumLoadedCount: number = 4;

    // public initGame() {
    //     this.updateLoadingProgress();
    // }

    // private updateLoadingProgress() {
    //     switch (this.curLoadedCount) {
    //         case 0:
    //             this.initConfig();
    //             break;
    //         case 1:
    //             this.initPoolNode();
    //             break;
    //         case 2:
    //             this.initGameData();
    //             break;
    //         case 3:
    //             this.initUI();
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // private completed() {
    //     this.curLoadedCount++;
    //     ListenerManager.getInstance().emit(ListenerType.UpdateLoadingProgress, this.curLoadedCount / this.sumLoadedCount);
    //     this.updateLoadingProgress();
    // }

    // private initConfig() {
    //     ConfigManager.getInstance().loadAllConfig(
    //         () => {
    //             cc.log("初始化配置表");
    //             this.completed();
    //         },
    //         AnimalConfigContainer,
    //         GridConfigContainer,
    //     );
    // }

    // private initPoolNode() {
    //     PoolManager.getInstance().loadAllNodePool(
    //         () => {
    //             cc.log("初始化对象池");
    //             this.completed();
    //         },
    //         AnimalNodePool,
    //         GridNodePool,
    //     );
    // }

    // private initGameData() {
    //     GameDataManager.getInstance().initData(() => {
    //         cc.log("初始化游戏数据");
    //         this.completed();
    //     });
    // }

    // private initUI() {
    //     UIManager.getInstance().openUI(MainUI, ConstValue.MAIN_UI_ZINDEX, () => {
    //         cc.log("初始化主游戏界面");
    //         this.completed();
    //     })
    // }
}