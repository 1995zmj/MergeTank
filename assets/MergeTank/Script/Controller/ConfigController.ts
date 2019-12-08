import Bullet from "./Tank/Bullet";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    @property(cc.JsonAsset)
    bodyConfig: cc.JsonAsset = null;

    @property(cc.JsonAsset)
    barrelConfig: cc.JsonAsset = null;

    @property(cc.JsonAsset)
    bulletConfig: cc.JsonAsset = null;


    onLoad()
    {
        
    }

}
