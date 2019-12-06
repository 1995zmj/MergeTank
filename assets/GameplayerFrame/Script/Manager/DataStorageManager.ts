import { BaseDataInfo } from "../DataInfo/BaseDataInfo";

export class DataStorageManager
{
    private static instance: DataStorageManager;

    // private static gameName: string = "game";
    private static pureDataCache: object = {};  // 只包含成员变量，不包含成员函数
    private static gameDataRef: BaseDataInfo = null;  // 游戏数据引用
    private static keyMap = {}; // 需存储的已改变的数据

    static getInstance(): DataStorageManager
    {
        if (this.instance == null)
        {
            this.instance = new DataStorageManager();
        }
        return this.instance;
    }

    //初始化数据
    static initLocalData(gameData: BaseDataInfo, callback: Function)
    {
        let firstLoginKey = gameData.getStorageKey() + "_firstLogin";
        this.pureDataCache = JSON.parse(JSON.stringify(gameData));
        this.gameDataRef = gameData;

        let isFirstLogin = this.getLocalItem(firstLoginKey, true);

        if (!isFirstLogin)
        {
            this.getLocalData(this.pureDataCache, gameData);
        }
        else
        {
            this.setLocalData(this.pureDataCache);
            this.setLocalItemImmediately(firstLoginKey, false);
        }


        callback && callback(isFirstLogin);
    }


    //保存数据
    static setLocalData(pureDataCache: object)
    {
        for (let key in pureDataCache)
        {
            let value = pureDataCache[key];

            if (key === "_storageKey")
            {
                continue;
            }

            if (value && typeof value === "object")
            {
                if (pureDataCache[key]["_storageKey"])
                {
                    this.setLocalData(pureDataCache[key]);
                }
                else
                {
                    this.setLocalItemImmediately(pureDataCache["_storageKey"] + key, value);
                }
            }
            else
            {
                this.setLocalItemImmediately(pureDataCache["_storageKey"] + key, value);
            }
        }
    }

    // 获得数据
    static getLocalData(pureDataCache: object, gameData: BaseDataInfo)
    {
        for (let key in pureDataCache)
        {
            let value = pureDataCache[key];

            if (key === "_storageKey")
            {
                continue;
            }

            if (value && typeof value === "object")
            {
                if (pureDataCache[key]["_storageKey"])
                {
                    this.getLocalData(pureDataCache[key], gameData[key]);
                }
                else
                {
                    let localValue = this.getLocalItem(pureDataCache["_storageKey"] + key, value);
                    pureDataCache[key] = localValue;
                    gameData[key] = localValue;
                }
            }
            else
            {
                let localValue = this.getLocalItem(pureDataCache["_storageKey"] + key, value);
                pureDataCache[key] = localValue;
                gameData[key] = localValue;
            }
        }
    }

    // //推迟更新
    // static setLocalItemDefer(key, value)
    // {
    //     let cloneValue = JSON.parse(JSON.stringify(value));
    //     this.pushChangedKey(key, cloneValue);
    //     this.pureDataCache[key] = cloneValue;
    // }

    // private static pushChangedKey(key, value)
    // {
    //     if(typeof value === "object")
    //     {
    //         for(let subKey in value)
    //         {
    //             if(subKey === "_storageKey")
    //             {
    //                 continue;
    //             }
    //             let subValue = value[subKey];
    //             if(this.pureDataCache[key])
    //             {
    //                 if(JSON.stringify(this.pureDataCache[key][subKey]) !== JSON.stringify(subValue))
    //                 {
    //                     this.keyMap[key+subKey] = {"key":key, "subKey":subKey};
    //                     this._syncLocalDataInterval();
    //                 }
    //             }
    //             else
    //             {
    //                 this.keyMap[key+subKey] = {"key":key, "subKey":subKey};
    //                 this._syncLocalDataInterval();
    //             }
    //         }
    //     }
    //     else
    //     {
    //         if(JSON.stringify(this.pureDataCache[key]) !== JSON.stringify(value))
    //         {
    //             this.keyMap[key] = {"key":key, "subKey":null};
    //             this._syncLocalDataInterval();
    //         }
    //     }
    // }

    static setLocalItemImmediately(key, value)
    {
        this._setData(key, value);
    }

    static getLocalItem(key, defaultValue?): any
    {
        let value = this._getData(key, defaultValue);
        if (typeof defaultValue == 'boolean')
        {
            value = this._toBoolean(value, defaultValue);
        }
        else if (typeof defaultValue == 'number')
        {
            value = this._toNumber(value, defaultValue);
        }
        else if (typeof defaultValue == 'object')
        {
            value = this._toJSON(value, defaultValue);
        }
        return value;
    }

    // // 主要是延迟保存
    // private static _syncLocalDataInterval()
    // {
    //     if(!this.intervalId) 
    //     {
    //         this.intervalId = setTimeout(()=>{
    //             this.intervalId = null;
    //             this._syncLocalData();
    //         },this.syncLocalDataInterval);
    //     }
    // }

    // private static _syncLocalData()
    // {
    //     for(let uniKey in this.keyMap)
    //     {
    //         let keysObj = this.keyMap[uniKey];
    //         let key = keysObj["key"];
    //         let subKey = keysObj["subKey"];
    //         if(!subKey)
    //         {
    //             this._setData(uniKey, this.gameDataRef[key]);
    //         }
    //         else
    //         {
    //             this._setData(uniKey, this.gameDataRef[key][subKey]);
    //         }
    //     }
    //     this.keyMap = {};
    // }

    private static _setData(key, value)
    {
        if (typeof value === "object")
        {
            value = JSON.stringify(value);
        }
        cc.sys.localStorage.setItem(key, value);
    }

    private static _getData(key, defaultValue)
    {
        let ret = cc.sys.localStorage.getItem(key);
        if ((ret == null || ret == "null") && defaultValue != null)
        {
            ret = defaultValue;
        }
        return ret;
    }

    private static _toBoolean(src, def)
    {
        if (typeof src == 'boolean')
        {
            return src;
        }
        else if (src == null || src == "")
        {
            return def;
        }
        else if (src == "false")
        {
            return false;
        }
        else if (src == "true")
        {
            return true;
        }
    }

    private static _toNumber(src, def)
    {
        let ret = Number(src);
        if (isNaN(ret))
        {
            return def;
        }
        else
        {
            return ret;
        }
    }

    private static _toJSON(src, def)
    {
        try
        {
            let ret = JSON.parse(src);
            if (typeof ret == 'object' && ret)
            {
                return ret;
            }
            else
            {
                return def;
            }
        }
        catch (e)
        {
            return def;
        }
    }

}