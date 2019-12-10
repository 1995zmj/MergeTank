import { BodyAttributes } from "../AttributesInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Body extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;
    
    init(bodyAttributes: BodyAttributes)
    {
        
    }
}
