import { _decorator, Component, Node, Vec3, Input, input, EventKeyboard, KeyCode } from 'cc';
const { ccclass, property } = _decorator;
import { EventMouse } from "cc";

@ccclass('Moover')
export class Moover extends Component {

    // @property({ type: Number })
    public xValue = 0;
    // @property({ type: Number })
    public yValue = 0;
    // @property({ type: Number })
    public zValue = 0;
    public moveSpeed = 100;

    onLoad() {
        // listen to wasd keydown event
        input.on(Input.EventType.KEY_DOWN, this.translate, this);
        input.on(Input.EventType.KEY_UP, this.stop, this);

    }


    start() {
    }

    stop(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ARROW_UP) this.xValue = 0;
        if (event.keyCode == KeyCode.ARROW_DOWN) this.xValue = 0;
        if (event.keyCode == KeyCode.ARROW_RIGHT) this.zValue = 0;
        if (event.keyCode == KeyCode.ARROW_LEFT) this.zValue = 0;
    }

    translate(event: EventKeyboard) {
        if (event.keyCode == KeyCode.ARROW_UP) this.zValue = -0.1;
        if (event.keyCode == KeyCode.ARROW_DOWN) this.zValue = 0.1;
        if (event.keyCode == KeyCode.ARROW_RIGHT) this.xValue = 0.1;
        if (event.keyCode == KeyCode.ARROW_LEFT) this.xValue = -0.1;
    }

    update(deltaTime: number) {
        // get the mouse position
        this.node.translate(new Vec3(this.xValue * deltaTime * this.moveSpeed, this.yValue * deltaTime * this.moveSpeed, this.zValue * deltaTime * this.moveSpeed));
        console.log(this.xValue);
        console.log(this.zValue);
        console.log(this.node.position);

    }
}

