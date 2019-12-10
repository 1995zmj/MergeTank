import { BaseConfigContainer } from "../../../../GameplayerFrame/Script/Manager/ConfigManager";

export interface  BulletData {
    id: number;
    atk: number;
    moveSpeed: number;
    maxDistance: number;
    sprite: string;
}

export class BulletConfigContainer extends BaseConfigContainer {
    private _bullConfigData: { [key: string]: BulletData } = {};

    constructor(json: cc.JsonAsset)
    {
        super();
        for (var i in json.json)
        {
            this._bullConfigData[i] = json.json[i];
        }
    }

    getBulletData(bulletId: number): BulletData
    {
        return this._bullConfigData[bulletId.toString()];
    }

}
