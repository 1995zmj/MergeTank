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
    bulletPerfab: cc.Prefab = null;
    bulletPool: cc.NodePool = null;

    @property(cc.Node)
    bulletLayer: cc.Node = null;

    direction: cc.Vec2 = cc.v2(0, -1);
    tankAttributes: TankAttributes = null;
    bulletAttributes: BulletAttributes


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
        this.initTankAttributes(tankAttributes);

        let bulletAttributes: BulletAttributes = {
            maxDistance: 10,
            direction: this.direction,
            startPosition: this.node.position,
            speed: 1000,
        }

        this.bulletAttributes = bulletAttributes;
    }

    onEnable()
    {
        this.startAtk();
    }

    initTankAttributes(tankAttributes: TankAttributes) {
        this.tankAttributes = tankAttributes;
        this.bulletPool = new cc.NodePool(Bullet);
    }


    startAtk()
    {
        this.schedule(this.spawnBullet, this.tankAttributes.combatAttributes.atkSpeed);
    }


    stopAtk()
    {
        this.unschedule(this.spawnBullet);
    }

    spawnBullet() {
        let node: cc.Node = null;
        if (this.bulletPool.size() > 0) {
            node = this.bulletPool.get();
        }
        else {
            node = cc.instantiate(this.bulletPerfab);
        }
        let bullet = node.getComponent(Bullet);
        if(bullet)
        {
            bullet.init(this, this.bulletAttributes);
        }

        bullet.node.parent = this.bulletLayer;
    }

    recycleBullet(node: cc.Node)
    {
        this.bulletPool.put(node);
    }
}
