const { ccclass, property } = cc._decorator;

@ccclass
export default class PageViewItem extends cc.Component
{
    itemID: number = 0;

    updateItem(i, j)
    {
        cc.log(i, j);
    }
}
