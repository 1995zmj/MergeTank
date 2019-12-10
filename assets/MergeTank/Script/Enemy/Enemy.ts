import { EnemyAttributes } from "../Controller/AttributesInterface";
import Bullet from "../Tank/Bullet";

const { ccclass, property } = cc._decorator;

export enum EnemyType
{
    MOVE,
    STOP,
}

@ccclass
export default class Enemy extends cc.Component
{
    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.Label)
    label: cc.Label = null;

    enemyAttributes: EnemyAttributes = {
        id: 0,
        atk: 1,
        hp: 1,
        def: 1,
        moveSpeed: 40,

        spriteFrame: null,
        startPosition: cc.v2(0, -1001),
        direction: cc.v2(0, -1),
    };

    private defaultDirection: cc.Vec2 = cc.v2(1, 0);

    state: EnemyType = EnemyType.MOVE;

    init(enemyAttributes)
    {
        this.enemyAttributes = enemyAttributes;

        this.node.position = this.enemyAttributes.startPosition;

        //计算的角度的方向和显示的方向相反
        let rotation = this.defaultDirection.signAngle(this.enemyAttributes.direction) / cc.macro.RAD;
        this.node.rotation = -rotation;

        if (this.enemyAttributes.spriteFrame)
        {
            this.sprite.spriteFrame = this.enemyAttributes.spriteFrame;
        }

        //显示内容
        this.label.node.rotation = -this.node.rotation; 
        this.label.string = 
        "id:" + this.enemyAttributes.id + "\n" +
        "atk:" + this.enemyAttributes.atk + "\n" + 
        "hp:" + this.enemyAttributes.hp + "\n" + 
        "def:" + this.enemyAttributes.def + "\n";
    }

    update(dt)
    {

        switch (this.state)
        {
            case EnemyType.MOVE:
                this.move(dt);
                break;

            default:
                break;
        }
    }

    move(dt: number)
    {
        let distance = this.enemyAttributes.moveSpeed * dt

        // 目前只向前攻击
        let position = this.node.position;
        this.node.position = position.add(this.enemyAttributes.direction.mul(distance));
    }

    onCollisionEnter(other: cc.BoxCollider, self: cc.BoxCollider)
    {

        this.state = EnemyType.STOP;

        cc.log(other.node);
        let bullet = other.node.getComponent(Bullet);

        if (bullet)
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
