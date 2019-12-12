import { BulletAttributes } from "../Controller/AttributesInterface";
import BulletController from "../Controller/BulletController";
import { PoolManager } from "../../../GameplayerFrame/Script/Manager/PoolManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    isvalid: boolean = false;

    bulletAttributes: BulletAttributes = {
        id: 0,
        spriteFrame: null,
        atk: 2,
        moveSpeed: 1000,
        maxDistance: 1000,
        startWorldPosition: cc.v2(0, -600),
        direction: cc.v2(0, 1),
    };
    private _distance: number = null;
    private defaultDirection: cc.Vec2 = cc.v2(0, 1);
    init(bulletAttributes: BulletAttributes) {
        this._distance = 0;
        
        if(bulletAttributes)
        {
            this.bulletAttributes = bulletAttributes;
        }
        
        if(this.bulletAttributes.spriteFrame)
        {
            // this.bulletAttributes = bulletAttributes;
        }

        this.node.rotation = -this.defaultDirection.signAngle(this.bulletAttributes.direction) / cc.macro.RAD;
        this.node.position = this.node.parent.convertToNodeSpaceAR(this.bulletAttributes.startWorldPosition);
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

    death()
    {
        this.node.parent = null;
        PoolManager.getInstance().recycle(this.node);
    }

    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider)
    {
        cc.log("击中物体");
        this.death();
    }

    unuse() {
        // cc.log("回收子弹");
    }

    reuse() {
        // cc.log("从新使用子弹");
    }
}
