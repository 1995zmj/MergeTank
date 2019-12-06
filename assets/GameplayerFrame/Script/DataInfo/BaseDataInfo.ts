
export abstract class BaseDataInfo{

    constructor(prefix: string){
        this.initStorageKey();
        cc.log("base1:" + this._storageKey);
        this._storageKey = prefix + "_" + this._storageKey;
        cc.log("base2:" + this._storageKey);
        
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
