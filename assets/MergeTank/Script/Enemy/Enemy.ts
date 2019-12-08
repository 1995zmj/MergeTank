import { EnemyAttributes } from "../Controller/AttributesInterface";
import Bullet from "../Tank/Bullet";

const { ccclass, property } = cc._decorator;

export enum EnemyType {
    MOVE,
    STOP,
}

@ccclass
export default class Enemy extends cc.Component {

    enemyAttributes: EnemyAttributes = {
        atk: 1,
        hp: 1,
        dfs: 1,
        moveSpeed: 40,

        startPosition: cc.v2(0, -1001),
        direction: cc.v2(0, -1),
    };

    private defaultDirection: cc.Vec2 = cc.v2(0, -1);

    state: EnemyType = EnemyType.MOVE;

    init(enemyAttributes) {
        this.enemyAttributes = enemyAttributes;

        this.node.rotation = this.defaultDirection.signAngle(this.enemyAttributes.direction) / Math.PI * 180;
        this.node.position = this.enemyAttributes.startPosition;
    }

    update(dt) {

        switch (this.state) {
            case EnemyType.MOVE:
                this.move(dt);
                break;

            default:
                break;
        }
    }


    move(dt: number) {
        let distance = this.enemyAttributes.moveSpeed * dt

        // 目前只向前攻击
        let position = this.node.position;
        this.node.position = position.add(this.enemyAttributes.direction.mul(distance));
    }

    onCollisionEnter(other:cc.BoxCollider, self:cc.BoxCollider) {

        this.state = EnemyType.STOP;

        cc.log(other.node);
        let bullet = other.node.getComponent(Bullet);

        if(bullet)
        {
            cc.log("被击中");
        }

        // // 碰撞系统会计算出碰撞组件在世界坐标系下的相关的值，并放到 world 这个属性里面
        // var world = self.world;

        // // 碰撞组件的 aabb 碰撞框
        // var aabb = world.aabb;

        // // 节点碰撞前上一帧 aabb 碰撞框的位置
        // var preAabb = world.preAabb;

        // // 碰撞框的世界矩阵
        // var t = world.transform;

        // // 以下属性为圆形碰撞组件特有属性
        // var r = world.radius;
        // var p = world.position;

        // // 以下属性为 矩形 和 多边形 碰撞组件特有属性
        // var ps = world.points;
    }


}
