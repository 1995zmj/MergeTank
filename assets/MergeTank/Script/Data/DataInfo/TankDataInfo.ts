import { BaseDataInfo } from "../../../../GameplayerFrame/Script/DataInfo/BaseDataInfo";

export class TankDataInfo extends BaseDataInfo
{
    initStorageKey()
    {
        this._storageKey = "TankDataInfo";
    }

    private _level: number = 0;
    public set level(v: number)
    {
        this._level = v;
    }
    public get level(): number
    {
        return this._level;
    }

    private _teamList: number[] = [-1,-1,-1];



}
