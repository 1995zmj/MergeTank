// 保存的值不能为null 这样就不知道转化成什么值了
export abstract class BaseDataInfo{

    constructor(prefix: string){
        this.initStorageKey();
        this._storageKey = prefix + "_" + this._storageKey;
    }
    
    protected _storageKey = "BaseDataInfo";
    protected abstract initStorageKey();

    public getStorageKey()
    {
        return this._storageKey;
    }
}


// export interface BaseDataInfo{
//     constructor(prefix: string);
//     _storageKey;
// }
