import { TankAttributes, BulletAttributes } from "../AttributesInterface";
import Bullet from "./Bullet";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tank extends cc.Component {

    @property(cc.Sprite)
    body: cc.Sprite = null;

    @property(cc.Sprite)
    barrel: cc.Sprite = null;

    @property(cc.Prefab)
    bullet: cc.Prefab = null;
    bulletPool: cc.NodePool = null;

    direction: cc.Vec2 = cc.v2(0, -1);
    tankAttributes: TankAttributes = null;

    onLoad() {
        // cc.log(this.direction.signAngle(cc.v2(0,1)) / Math.PI * 180);
        // this.node.rotation = this.direction.signAngle(cc.v2(0,1)) / Math.PI * 180;

        let tankAttributes: TankAttributes = {
            id: 1,
            level: 1,
            bulletType: 1,
            combatAttributes: {
                atk: 1,
                dps: 1,
                hp: 1,
                atkSpeed: 1,
                moveSpeed: 1,
                atkRange: 1,
            }
        }
        this.init(tankAttributes);
    }

    init(tankAttributes: TankAttributes) {
        this.tankAttributes = tankAttributes;
        this.bulletPool = new cc.NodePool(Bullet);
    }



    update(dt) {

    }


    atk() {

    }

    spawnBullet(bulletAttributes: BulletAttributes) {
        if (this.bulletPool.size() > 0) {
            let node = this.bulletPool.get();
        }
        else {
            this.init
        }
    }
}
