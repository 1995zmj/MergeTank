import { BaseDataInfo } from "../../../GameplayerFrame/Script/DataInfo/BaseDataInfo";
import { PlayerDataInfo } from "./DataInfo/PlayerDataInfo";

export class DataInfo extends BaseDataInfo
{
    protected initStorageKey()
    {
        this._storageKey = "DataInfo";
    }

    public playerDataInfo: PlayerDataInfo = new PlayerDataInfo(this._storageKey);
}