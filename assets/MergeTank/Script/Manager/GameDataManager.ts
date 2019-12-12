import { DataInfo } from "../Data/DataInfo";
import { DataStorageManager } from "../../../GameplayerFrame/Script/Manager/DataStorageManager";
import { GameData } from "../Data/GameData";

export class GameDataManager
{
    private static instance: GameDataManager;

    // 本地数据
    private dataInfo: DataInfo = new DataInfo("game");
    // 运行数据
    private gameData: GameData = new GameData();

    static getInstance(): GameDataManager
    {
        if (this.instance == null)
        {
            this.instance = new GameDataManager();
        }
        return this.instance;
    }

    getDataInfo(): DataInfo
    {
        return this.dataInfo;
    }

    getGameData(): GameData
    {
        return this.gameData;
    }

    initData(callback: Function)
    {
        cc.log(this.dataInfo);
        DataStorageManager.initLocalData(this.dataInfo,()=>{});
        cc.log(this.dataInfo);
        callback();
    }

    
}