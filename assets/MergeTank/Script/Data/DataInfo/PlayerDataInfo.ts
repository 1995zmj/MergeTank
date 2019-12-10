import { BaseDataInfo } from "../../../../GameplayerFrame/Script/DataInfo/BaseDataInfo";
import { TankDataInfo } from "./TankDataInfo";
import { DataStorageManager } from "../../../../GameplayerFrame/Script/Manager/DataStorageManager";

export class PlayerDataInfo extends BaseDataInfo
{
    initStorageKey()
    {
        this._storageKey = "PlayerDataInfo";
    }

    private _level: number = 0;
    public set level(v: number)
    {
        this._level = v;
        cc.log(this._level);
        this.updateData(this.getStorageKey() + "_level", this._level);
    }
    public get level(): number
    {
        return this._level;
    }


    private _teamList: number[] = [-1, -1, -1];
    public set teamList(v: number[])
    {
        this._teamList = v;
        this.updateData(this.getStorageKey() + "_teamList", this._teamList);
    }
    public get teamList(): number[]
    {
        return this._teamList;
    }

    private _tankInfo: TankDataInfo = new TankDataInfo(this.getStorageKey());


    updateData(key:string,value: any)
    {
        DataStorageManager.setLocalItemImmediately(key, value);
    }
}
