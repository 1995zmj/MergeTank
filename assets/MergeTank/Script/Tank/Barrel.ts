import { BarrelAttributes } from "../AttributesInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Barrel extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    init(barrelAttributes: BarrelAttributes)
    {
        
    }

}
