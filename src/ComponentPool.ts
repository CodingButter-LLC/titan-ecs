import World from "./World"

export default class ComponentPool {
    world: World;
    pool: Array<any> = [];
    targetSize: number;
    type: string;
    klass: any;
    active: number = 0;
    constructor(world: World, type: string, spinup: number) {
        this.world = world;
        this.type = type;
        this.klass = this.world.componentTypes[this.type];
    }
}