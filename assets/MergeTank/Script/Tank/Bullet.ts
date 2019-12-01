import Tank from "./Tank";
import { BulletAttributes } from "../AttributesInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
    isvalid: boolean  = false;

    bulletAttributes: BulletAttributes = null;
    private _master: Tank = null;
    private _distance: number = null;
    init(master: Tank,bulletAttributes: BulletAttributes)
    {
        this._master = master;
        this.bulletAttributes = bulletAttributes;
    }

    start () {

    }

    update (dt) {

        // // 目前只向前攻击
        // let position = this.node.position;
        // this.node.position = position.add(this.bulletAttributes.direction.mul(this.bulletAttributes.speed * dt));
    }

    unuse() {
        cc.log("回收子弹");
    }

    reuse () {
        cc.log("从新使用子弹");
    }
}
