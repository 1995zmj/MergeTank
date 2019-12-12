import { BaseDataInfo } from "../../../../GameplayerFrame/Script/DataInfo/BaseDataInfo";
import { DataStorageManager } from "../../../../GameplayerFrame/Script/Manager/DataStorageManager";

export interface PlatformUnitInfo
{
    lock: boolean;
    level: number;
}
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
        this.updateData(this.getStorageKey() + "_level", this._level);
    }
    public get level(): number
    {
        return this._level;
    }

    private _teamList: number[] = [];
    public set teamList(v: number[])
    {
        this._teamList = v;
        this.updateData(this.getStorageKey() + "_teamList", this._teamList);
    }
    public get teamList(): number[]
    {
        return this._teamList;
    }

    private _unitInfoList: PlatformUnitInfo[] = [];
    public set unitInfoList(v: PlatformUnitInfo[])
    {
        this._unitInfoList = v;
        this.updateData(this.getStorageKey() + "_unitInfoList", this._unitInfoList);
    }
    public get unitInfoList(): PlatformUnitInfo[]
    {
        return this._unitInfoList;
    }

    updateData(key: string, value: any)
    {
        DataStorageManager.setLocalItemImmediately(key, value);
    }
}
