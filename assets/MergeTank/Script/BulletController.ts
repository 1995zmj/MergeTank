import Bullet from "./Tank/Bullet";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    @property(cc.Prefab)
    bulletPerfab: cc.Prefab = null;
    bulletPool: cc.NodePool = null;

    

    spawnBullet(bulletAttributes) {
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
            bullet.init(this, bulletAttributes);
        }

        bullet.node.parent = this.node;
    }

    recycleBullet(node: cc.Node)
    {
        this.bulletPool.put(node);
    }
}
