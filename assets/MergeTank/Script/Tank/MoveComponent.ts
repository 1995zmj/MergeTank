import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MoveComponent extends cc.Component {

    // LIFE-CYCLE CALLBACKS:

    @property(cc.Node)
    uiNode: cc.Node = null;

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
        let moveDirection: cc.Vec2 = cc.v2(event.getDeltaX(),event.getDeltaY()).normalize();
        cc.log("direction: ", moveDirection);
        ListenerManager.getInstance().emit(ListenerType.MoveDirection,moveDirection);
    }

    onTouchEnd(event: cc.Event.EventTouch)
    {

    }

    onTouchCancel()
    {

    }
    
}
