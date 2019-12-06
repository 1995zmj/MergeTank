import { BaseDataInfo } from "../../../../GameplayerFrame/Script/DataInfo/BaseDataInfo";
import { TankDataInfo } from "./TankDataInfo";
import { DataStorageManager } from "../../../../GameplayerFrame/Script/Manager/DataStorageManager";

function configurable(value: boolean)
{
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        // descriptor.configurable = value;
        console.log(target.constructor.name);
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}

export function storage(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any>
{
    const oldValue = descriptor.value;
    descriptor.value = function (...rest: any[])
    {
        // 执行原方法
        oldValue.apply(this, rest);
        console.log(`save ${target.constructor.name}.${propertyKey}:${rest}`);
    };
    return descriptor;
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
        cc.log(this._level);
        // this.updateData(this.getStorageKey() + this._level.t, this._level)
    }
    @configurable(true)
    public get level(): number
    {
        return this._level;
    }

    private _teamList: number[] = [-1, -1, -1];

    private _tankInfo: TankDataInfo = new TankDataInfo(this.getStorageKey());


    updateData(key: string, value: any)
    {
        DataStorageManager.setLocalItemImmediately(key, value);
    }
}
