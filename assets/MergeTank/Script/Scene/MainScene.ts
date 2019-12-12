import { GameDataManager } from "../Manager/GameDataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends cc.Component {

    onLoad()
    {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;

        GameDataManager.getInstance().initData(()=>{

        });
    }
}
