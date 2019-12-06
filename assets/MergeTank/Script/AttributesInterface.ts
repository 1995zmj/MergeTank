
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
    atkSpeed: number;
    bulletType: number;
}

export interface BulletAttributes {
    
    atk: number;
    moveSpeed: number;
    // -1 代表是无线距离知道碰到障碍物停止
    // 到达最远距离消失
    maxDistance: number;

    startPosition: cc.Vec2;
    direction: cc.Vec2;
}
