import Bullet from "./Bullet";
import Body from "./Body";
import TankController from "../Controller/TankController";
import { TankAttributes } from "../Controller/AttributesInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tank extends cc.Component {

    @property(cc.Prefab)
    bodyPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    barrelPrefab: cc.Prefab = null;

    tankAttributes: TankAttributes = null;

    private _controller: TankController = null;
    private defaultDirection: cc.Vec2 = cc.v2(0, -1);

    onLoad() {
        // cc.log(this.direction.signAngle(cc.v2(0,1)) / Math.PI * 180);
        // this.node.rotation = this.direction.signAngle(cc.v2(0,1)) / Math.PI * 180;
    }

    init(controller:TankController, tankAttributes: TankAttributes) {
        this._controller = controller;
        this.tankAttributes = tankAttributes;

        this.node.rotation = this.defaultDirection.signAngle(this.tankAttributes.direction) / Math.PI * 180;
        this.node.position = this.tankAttributes.startPosition;
    }

    initBody()
    {
        let node = cc.instantiate(this.bodyPrefab);
        let body = node.getComponent(Body);

        this.node
    }


    startAtk()
    {
        // this.schedule(this.spawnBullet, this.tankAttributes.combatAttributes.atkSpeed);
    }


    stopAtk()
    {
        // this.unschedule(this.spawnBullet);
    }

    
}
