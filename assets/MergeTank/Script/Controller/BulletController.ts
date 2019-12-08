import { BulletAttributes } from "./AttributesInterface";
import { PoolManager } from "../../../GameplayerFrame/Script/Manager/PoolManager";
import Bullet from "../Tank/Bullet";
import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    @property(cc.Prefab)
    bulletPerfab: cc.Prefab = null;
    bulletPool: cc.NodePool = null;

    // bulletList: Bullet[] = [];

    onLoad() {
        PoolManager.getInstance().creatNodePool(this.bulletPerfab, Bullet);
        ListenerManager.getInstance().on(ListenerType.OnSpawnBullet,this.spawnBullet,this);
    }

    spawnBullet(bulletAttributes: BulletAttributes) {
        let node = PoolManager.getInstance().spawn("Bullet");
        let bullet = node.getComponent(Bullet);
        bullet.init(bulletAttributes);
        node.parent = this.node;
        // this.bulletList.push(bullet);
    }
}
