import Component from "./Component";

export default class World {
    componentTypes: { [key: string]: any } = {};
    componentPool: Map<string, Component> = new Map<string, Component>();
    constructor(config:any) {

    }
} 