import Tank from "./Tank";
import { BulletAttributes } from "../Controller/AttributesInterface";
import BulletController from "../Controller/BulletController";
import { PoolManager } from "../../../GameplayerFrame/Script/Manager/PoolManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    isvalid: boolean = false;

    bulletAttributes: BulletAttributes = {

        bulletType: 0,
        atk: 2,
        moveSpeed: 1000,
        maxDistance: 1000,
        startPosition: cc.v2(0, -600),
        direction: cc.v2(0, 1),
    };
    private _distance: number = null;
    private defaultDirection: cc.Vec2 = cc.v2(0, 1);
    init(bulletAttributes: BulletAttributes) {
        this._distance = 0;
        this.bulletAttributes = bulletAttributes;

        // cc.log(this.bulletAttributes.direction.signAngle(cc.v2(0, 1)) / Math.PI * 180);
        this.node.rotation = this.defaultDirection.signAngle(this.bulletAttributes.direction) / Math.PI * 180;
        this.node.position = this.bulletAttributes.startPosition;
    }

    start() {

    }

    update(dt) {

        if (this._distance > this.bulletAttributes.maxDistance) {
            PoolManager.getInstance().recycle(this.node);
            return
        }

        this._distance += this.bulletAttributes.moveSpeed * dt

        // 目前只向前攻击
        let position = this.node.position;
        this.node.position = position.add(this.bulletAttributes.direction.mul(this.bulletAttributes.moveSpeed * dt));
    }

    unuse() {
        cc.log("回收子弹");
    }

    reuse() {
        cc.log("从新使用子弹");
    }
}
