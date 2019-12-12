import Enemy from "../Enemy/Enemy";
import { EnemyConfigContainer } from "../Config/ConfigContainer/EnemyConfigContainer";
import EnemyController from "./EnemyController";
import Barrel from "../Defence/Barrel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DefenceController extends cc.Component
{
    @property(cc.JsonAsset)
    barrelConfig: cc.JsonAsset = null;

    @property(EnemyController)
    enemyController: EnemyController = null;
    
    @property(Barrel)
    barrel: Barrel = null;


    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(event: cc.Event.EventTouch)
    {

    }

    onTouchMove(event: cc.Event.EventTouch)
    {

        let pos = event.getLocation();
        this.barrel.setTarge(pos);
        cc.log("direction: ", pos);
    }

    onTouchEnd(event: cc.Event.EventTouch)
    {

    }

    onTouchCancel()
    {

    }
}
