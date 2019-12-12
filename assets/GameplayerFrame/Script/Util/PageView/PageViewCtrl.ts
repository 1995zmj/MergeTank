import PageViewItem from "./PageViewItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ListViewCtrl extends cc.Component
{

    @property(cc.Prefab)
    itemTemplate: cc.Prefab = null;

    @property(cc.PageView)
    target: cc.PageView = null;

    @property
    spawnCount: number = 0;

    @property
    totalCount: number = 0;

    items: cc.Node[] = [];

    onLoad()
    {
        // this.initialize();
        // this.target.setCurrentPageIndex(0);
    }

    initialize()
    {
        for (let i = 0; i < this.spawnCount; ++i)
        { 
            let itemNode = cc.instantiate(this.itemTemplate);
            let item = itemNode.getComponent(PageViewItem);
            item.itemID = i;
            item.updateItem(i,i);
            this.items.push(itemNode);
            this.target.addPage(itemNode);
        }

    }

    

    onBtnJumpHome()
    {

    }

    // 监听事件
    onPageEvent (sender, eventType) {
        // 翻页事件
        if (eventType !== cc.PageView.EventType.PAGE_TURNING) {
            return;
        }
        console.log("当前所在的页面索引:" + sender.getCurrentPageIndex());
    }
}
