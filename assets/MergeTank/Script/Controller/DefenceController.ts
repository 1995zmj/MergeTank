
const { ccclass, property } = cc._decorator;

@ccclass
export default class DefenceController extends cc.Component
{
    @property(cc.JsonAsset)
    barrelConfig: cc.JsonAsset = null;

    onLoad()
    {

    }

    // start()
    // {
    //     let tankAttributes = {
    //         bodyType: 0,
    //         BarrelsType: [0],
    //         BarrelsPosition: [cc.v2(0,0)],
    //         startPosition: cc.v2(0, 0),
    //         direction: cc.v2(0, 1),
    //     }
    //     this.spawnTank(tankAttributes);
    // }

    // spawnTank(tankAttributes: TankAttributes)
    // {
    //     let node: cc.Node = null;
    //     if (this.tankNodePool.size() > 0)
    //     {
    //         node = this.tankNodePool.get();
    //     }
    //     else
    //     {
    //         node = cc.instantiate(this.tankPrefab);
    //     }
    //     let tank = node.getComponent(Tank);
    //     if (tank)
    //     {
    //         tank.init(this, tankAttributes);
    //     }
    //     tank.node.parent = this.node;
    // }

    // recycleTank(node: cc.Node)
    // {
    //     this.tankNodePool.put(node);
    // }

    

}
