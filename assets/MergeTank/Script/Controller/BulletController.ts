import { BulletAttributes } from "./AttributesInterface";
import { PoolManager } from "../../../GameplayerFrame/Script/Manager/PoolManager";
import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";
import Bullet from "../Defence/Bullet";
import { ConfigManager } from "../../../GameplayerFrame/Script/Manager/ConfigManager";
import { BulletConfigContainer } from "../Config/ConfigContainer/BulletConfigContainer";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    @property(cc.Prefab)
    bulletPerfab: cc.Prefab = null;
    @property(cc.JsonAsset)
    bulletConfig: cc.JsonAsset = null;

    onLoad() {
        PoolManager.getInstance().creatNodePool(this.bulletPerfab, Bullet);
        ConfigManager.getInstance().creatConfig(this.bulletConfig, BulletConfigContainer);
        
        ListenerManager.getInstance().on(ListenerType.OnSpawnBullet,this.spawnBullet,this);
    }

    spawnBullet(bulletAttributes: BulletAttributes) {
        let node = PoolManager.getInstance().spawn(Bullet);
        let bullet = node.getComponent(Bullet);
        node.parent = this.node;
        bullet.init(bulletAttributes);
        // this.bulletList.push(bullet);
    }
}
