
import { _decorator, Component, Node, Button, SystemEvent, instantiate, resources, director, Prefab } from 'cc';
import { showToast } from './Toast';
const { ccclass, property } = _decorator;



@ccclass('Main')
export class Main extends Component {

    @property(Button)
    showToast: Button = null;

    @property({ type: Prefab })
    private target: Prefab = null;

    onLoad() {
        this.showToast.node.on(Button.EventType.CLICK, this._show, this)
    }


    private _show() {
        showToast(this.node, "Hello World")
    }

}