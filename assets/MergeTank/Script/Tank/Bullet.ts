import Tank from "./Tank";
import { BulletAttributes } from "../AttributesInterface";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    isvalid: boolean = false;

    bulletAttributes: BulletAttributes = null;
    private _master: Tank = null;
    private _distance: number = null;
    private defaultDirection: cc.Vec2 = cc.v2(0, 1);
    init(master: Tank, bulletAttributes: BulletAttributes) {
        this._master = master;
        this._distance = 0;
        this.bulletAttributes = bulletAttributes;

        // cc.log(this.bulletAttributes.direction.signAngle(cc.v2(0, 1)) / Math.PI * 180);
        this.node.rotation = this.defaultDirection.signAngle(this.bulletAttributes.direction) / Math.PI * 180;
        this.node.position = this.bulletAttributes.startPosition;
    }

    start() {

    }

    update(dt) {

        if(this._distance > 1000)
        {
            this.node.parent = null;
            this._master.recycleBullet(this.node);
            return
        }

        this._distance += this.bulletAttributes.speed * dt

        // 目前只向前攻击
        let position = this.node.position;
        this.node.position = position.add(this.bulletAttributes.direction.mul(this.bulletAttributes.speed * dt));
    }

    unuse() {
        cc.log("回收子弹");
    }

    reuse() {
        cc.log("从新使用子弹");
    }
}
