export interface BaseCombatAttributes {
    atk: number;
    dps: number;
    hp: number;
    atkSpeed: number;
    moveSpeed: number;
    atkRange: number;
}

export interface TankAttributes {
    id: number;
    level: number;
    bulletType: number;
    combatAttributes: BaseCombatAttributes;
}

export interface BulletAttributes {
    // -1 代表是无线距离知道碰到障碍物停止
    // 到达最远距离消失
    maxDistance: number;
    direction: cc.Vec2;
    speed: number;
}
