export interface ConfigContainerClass<T extends BaseConfigContainer>
{
    // new (callback: Function, caller: any, arg: any): T;
    new (json: cc.JsonAsset): T;
}

export abstract class BaseConfigContainer 
{
    
}

export class ConfigManager
{
    private static instance: ConfigManager;

    private _configContainerMap: { [key: string]: BaseConfigContainer} = {};

    public static getInstance(): ConfigManager
    {
        if (this.instance == null)
        {
            this.instance = new ConfigManager();
        }
        return this.instance;
    }

    public creatConfig<T extends BaseConfigContainer>(json: cc.JsonAsset,configClass: ConfigContainerClass<T>){
        let config = new configClass(json);
        cc.log(configClass["name"]);
        this._configContainerMap[configClass["name"]] = config;
    }
    

    // public loadAllConfig(callback: Function, ...configClasss:{new (callback: Function, caller: any, arg: any): BaseConfigContainer}[]): void
    // {  
    //     for (let index = 0; index < configClasss.length; index++) {
    //         this.loadConfig(configClasss[index], this.callback, callback);
    //     }
    // }

    public getConfig<T extends BaseConfigContainer>(configClass: ConfigContainerClass<T>): BaseConfigContainer
    {
        return this._configContainerMap[configClass["name"]];
    }

    // public loadConfig<T extends BaseConfigContainer>(configClass: ConfigContainerClass<T>, callback: Function, arg: any)
    // {
    //     let config = new configClass(callback, this, arg);
    //     config.tag = configClass;
    //     this.configContainerList.push(config);
    // }

    // private callback(callback: Function)
    // {
    //     this.curLoadedCount += 1;
    //     if (this.configContainerList.length == this.curLoadedCount)
    //     {
    //         if (callback)
    //         {
    //             callback();
    //         }
    //     }
    // }
}