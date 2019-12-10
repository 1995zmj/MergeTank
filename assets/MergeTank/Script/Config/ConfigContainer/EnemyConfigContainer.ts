import { BaseConfigContainer } from "../../../../GameplayerFrame/Script/Manager/ConfigManager";

export interface  EnemyData {
    id: number;
    atk: number;
    def: number;
    hp: number;
    moveSpeed: number;
    sprite: string;
}

export class EnemyConfigContainer extends BaseConfigContainer {
    private _enemyConfigData: { [key: string]: EnemyData } = {};

    // constructor(callback: Function, caller: any, arg: any)
    // {
    //     super();
    //     cc.loader.loadRes(ConstValue.CONFIG_FILE_DIR + "Animal", (err, object) =>
    //     {
    //         if (err)
    //         {
    //             cc.log("load AnimalConfig.json err");
    //             cc.log(err);
    //         }
    //         else
    //         {
    //             object = object.json;
    //             for (var i in object)
    //             {
    //                 this.animalConfigData[i] = object[i];
    //             }
    //             if (callback)
    //             {
    //                 callback.call(caller, arg);
    //             }
    //         }
    //     }
    //     );
    // }

    constructor(json: cc.JsonAsset)
    {
        super();
        for (var i in json.json)
        {
            this._enemyConfigData[i] = json.json[i];
        }
    }

    getEnemyData(enemyId: number): EnemyData
    {
        return this._enemyConfigData[enemyId.toString()];
    }

}
