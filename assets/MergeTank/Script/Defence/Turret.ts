const {ccclass, property} = cc._decorator;

@ccclass
export default class Turret extends cc.Component {

    @property(cc.Node)
    Axes: cc.Node = null;



    tragetPosition: cc.Vec2 = cc.Vec2.ZERO;

}
