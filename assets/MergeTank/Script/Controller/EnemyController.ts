import Enemy from "../Enemy/Enemy";
import { PoolManager, Pool } from "../../../GameplayerFrame/Script/Manager/PoolManager";
import { EnemyAttributes, BulletAttributes } from "./AttributesInterface";
import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";
import { ConfigManager } from "../../../GameplayerFrame/Script/Manager/ConfigManager";
import { EnemyConfigContainer } from "../Config/ConfigContainer/EnemyConfigContainer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component
{

    @property(cc.Prefab)
    normalEnemyPrefab: cc.Prefab = null;

    @property(cc.JsonAsset)
    enemyConfig: cc.JsonAsset = null;

    @property(cc.SpriteFrame)
    enemySpriteFrame: cc.SpriteFrame[] = [];

    enemyList: Enemy[] = [];

    // LIFE-CYCLE CALLBACKS:

    onLoad()
    {
        PoolManager.getInstance().creatNodePool(this.normalEnemyPrefab, Enemy);
        ConfigManager.getInstance().creatConfig(this.enemyConfig, EnemyConfigContainer);
    }

    start()
    {
        this.schedule(this.enemySpawnController, 5);
        // this.schedule(this.spawnBullet, 0.5);
    }

    enemySpawnController()
    {
        let node = PoolManager.getInstance().spawn(Enemy);
        let enemy = node.getComponent(Enemy);

        let id: number = 1;

        let enemyConfigContainer = ConfigManager.getInstance().getConfig(EnemyConfigContainer) as EnemyConfigContainer;
        let enemyData = enemyConfigContainer.getEnemyData(id);

        // 初始位置和初始方向
        let max = 300;
        let min = -300;
        let x = Math.floor(Math.random() * (max - min + 1) + min);
        let startPosition = cc.v2(0, 600);
        let stattDirection = cc.v2(0, -1);

        let enemyAttributes: EnemyAttributes = {
            id: id,
            atk: enemyData.atk,
            hp: enemyData.hp,
            def: enemyData.def,
            moveSpeed: enemyData.moveSpeed,
            spriteFrame: this.enemySpriteFrame[id],
            startPosition: startPosition,
            direction: stattDirection,
        };

        enemy.init(enemyAttributes);
        node.parent = this.node;
        this.enemyList.push(enemy);
    }
}
