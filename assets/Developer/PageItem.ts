import PageViewItem from "../GameplayerFrame/Script/Util/PageView/PageViewItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PageItem extends PageViewItem {

    @property(cc.Label)
    label: cc.Label = null;

    updateItem()
    {
        this.label.string = this.itemID.toString();
    }
}
