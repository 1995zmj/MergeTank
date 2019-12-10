
export interface TankAttributes {
    bodyType: number;
    BarrelsType: number[];
    BarrelsPosition: cc.Vec2[];
    startPosition: cc.Vec2;
    direction: cc.Vec2;
}

export interface BodyAttributes {
    hp: number;
    moveSpeed: number;
}

export interface BarrelAttributes {
    id: number;
    atkSpeed: number;
    bulletId: number;
}

export interface BulletAttributes {
    id: number;
    spriteFrame: cc.SpriteFrame;

    atk: number;
    moveSpeed: number;
    // -1 代表是无线距离知道碰到障碍物停止
    // 到达最远距离消失
    maxDistance: number;

    startWorldPosition: cc.Vec2;
    direction: cc.Vec2;
}

export interface EnemyAttributes {
    id: number;
    atk: number;
    hp: number;
    def: number;
    moveSpeed: number;
    spriteFrame: cc.SpriteFrame;
    
    startPosition: cc.Vec2;
    direction: cc.Vec2;
}
