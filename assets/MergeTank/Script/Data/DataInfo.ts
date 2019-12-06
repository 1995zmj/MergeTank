export class DataInfo
{
    public objectName = "";
    public _storageKey = "";


    constructor(worldName: string = "MainWorld", preKey: string = "DragonWar")
    {
        this.objectName = worldName;
        this._storageKey = preKey + "_" + worldName;
        // let container = ConfigManager.getInstance().getConfig(WorldConfigContainer) as WorldConfigContainer;
        // let worldConfigData = container.getWorldConfigData();
        // for(let i = 0; i < worldConfigData.mainlandDataList.length; ++i)
        // {
        //     let mainlandInfo = new MainlandInfo(worldConfigData.mainlandDataList[i].storageKey, this._storageKey);
        //     this.mainlandInfoList.push(mainlandInfo);
        // }
        // this.taskInfo = new TaskInfo(this._storageKey);
        // this.dpInfo = new DPInfo(this._storageKey);
        // this.magicInfo = new MagicInfo(this._storageKey);
        // this.worldGuideInfo = new WorldGuideInfo(this._storageKey);
        // this.worldOtherInfo = new WorldOtherInfo(this._storageKey);
    }
}