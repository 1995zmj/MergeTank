import { BarrelAttributes, BulletAttributes } from "../Controller/AttributesInterface";
import { ListenerManager } from "../../../GameplayerFrame/Script/Manager/ListenerManager";
import { ListenerType } from "../../../GameplayerFrame/Script/Data/ListenerType";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Barrel extends cc.Component
{

    @property(cc.Node)
    axesNode: cc.Node = null;

    @property(cc.Node)
    firePosition: cc.Node[] = [];

    barrelAttributes: BarrelAttributes = {
        id: 0,
        atkSpeed: 1,
        bulletId: 0,
    };

    targePosition: cc.Vec2 = cc.Vec2.UP;
    direction: cc.Vec2 = cc.v2(0, 1);
    // targeDirection: cc.Vec2 = cc.v2(0, 1);

    private defaultDirection: cc.Vec2 = cc.v2(0, 1);

    onLoad()
    {
        //测试
        this.init(null);
        this.fire();
    }

    init(barrelAttributes: BarrelAttributes)
    {
        if (barrelAttributes)
        {
            this.barrelAttributes = barrelAttributes;
        }

        //计算的角度的方向和显示的方向相反
        // let rotation = this.defaultDirection.signAngle(this.barrelAttributes.direction) / cc.macro.RAD;
        // this.axesNode.rotation = -rotation;


    }

    setTarge(worldPosition: cc.Vec2)
    {
        // let pos = this.axesNode.parent.convertToNodeSpaceAR(worldPosition);
        let direction = cc.v2(1, 1);

        this.direction = direction.normalize();

        //计算的角度的方向和显示的方向相反
        let rotation = this.defaultDirection.signAngle(direction) / cc.macro.RAD;
        this.axesNode.rotation = -rotation;
    }

    // changeDirection()
    // {
    //     if (this.firePosition)
    // }

    fire()
    {
        this.schedule(this.spawnBullet, this.barrelAttributes.atkSpeed);
    }

    spawnBullet()
    {

        for (let i = 0; i < this.firePosition.length; i++)
        {
            const element = this.firePosition[i];
            let worldPosition = element.parent.convertToWorldSpaceAR(element.position);
            let bulletAttributes: BulletAttributes = {
                id: 0,
                spriteFrame: null,
                atk: 2,
                moveSpeed: 1000,
                maxDistance: 500,
                startWorldPosition: worldPosition,
                direction: this.direction,
            };
            ListenerManager.getInstance().emit(ListenerType.OnSpawnBullet, bulletAttributes);
        }

    }



}
