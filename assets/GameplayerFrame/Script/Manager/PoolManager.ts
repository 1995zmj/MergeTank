export class Pool extends cc.NodePool
{
    constructor(prefab: cc.Prefab, poolHandlerComp: { prototype: cc.Component })
    {
        super(poolHandlerComp);
        this._prefab = prefab;
    }
    private _prefab: cc.Prefab = null;
    public creatNewNode(): cc.Node
    {
        let node = cc.instantiate(this._prefab);
        return node;
    }
}

export class PoolManager
{
    private static instance: PoolManager;

    private _poolMap: { [key: string]: Pool } = {};

    public static getInstance(): PoolManager
    {
        if (this.instance == null)
        {
            this.instance = new PoolManager();
        }
        return this.instance;
    }

    public creatNodePool(prefab: cc.Prefab, poolHandlerComp: { prototype: cc.Component })
    {

        let pool: Pool = null;
        cc.log("创建" + prefab.name);
        if (this._poolMap[prefab.name])
        {
            cc.log("已经存在", prefab.name);
            pool = this._poolMap[prefab.name];
        }
        else
        {
            pool = new Pool(prefab, poolHandlerComp);
            this._poolMap[prefab.name] = pool;
        }
    }

    spawn(poolHandlerComp: { prototype: cc.Component }): cc.Node
    {
        let node: cc.Node = null;
        let pool = this._poolMap[poolHandlerComp["name"]];
        if (pool.size() > 0)
        {
            node = pool.get();
        }
        else
        {
            node = pool.creatNewNode();
        }

        return node;
    }

    recycle(node: cc.Node)
    {
        if (!cc.isValid(cc.Node))
        {
            cc.log(node.name + "节点已经不存在");
            return;
        }
        let name = node.name;
        let pool = this._poolMap[name];
        pool.put(node);
    }
}