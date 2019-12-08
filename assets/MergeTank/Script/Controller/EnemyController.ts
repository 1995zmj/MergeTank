import Enemy from "../Enemy/Enemy";
import { PoolManager, Pool } from "../../../GameplayerFrame/Script/Manager/PoolManager";
import { EnemyAttributes, BulletAttributes } from "./AttributesInterface";
import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";


const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

    @property(cc.Prefab)
    normalEnemyPrefab: cc.Prefab = null;

    enemyList: Enemy[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        PoolManager.getInstance().creatNodePool(this.normalEnemyPrefab, Enemy);
    }

    start() {
        this.schedule(this.enemySpawnController, 0.5);
        this.schedule(this.spawnBullet, 0.5);

    }

    enemySpawnController() {
        let node = PoolManager.getInstance().spawn("Enemy");
        let enemy = node.getComponent(Enemy);

        let max = 300;
        let min = -300;
        let x = Math.floor(Math.random() * (max - min + 1) + min);

        let enemyAttributes: EnemyAttributes = {
            atk: 1,
            hp: 1,
            dfs: 1,
            moveSpeed: 40,

            startPosition: cc.v2(x, 600),
            direction: cc.v2(0, -1),
        };


        enemy.init(enemyAttributes);
        node.parent = this.node;
        this.enemyList.push(enemy);
    }

    spawnBullet()
    {
        let bulletAttributes: BulletAttributes = {

            bulletType: 0,
            atk: 2,
            moveSpeed: 1000,
            maxDistance: 500,
            startPosition: cc.v2(0, -600),
            direction: cc.v2(0, 1),
        };
        ListenerManager.getInstance().emit(ListenerType.OnSpawnBullet,bulletAttributes);
    }


}
