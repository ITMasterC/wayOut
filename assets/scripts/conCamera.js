import {
    _decorator,
    Component,
    PhysicsSystem,
    Node,
    SystemEventType,
    systemEvent,
    geometry,
    CameraComponent,
    Layers
} from "cc";
import {
    cubeNode
} from "./cubeNode";
const {
    ccclass,
    property
} = _decorator;

@ccclass("conCamera")
export class conCamera extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property([cc.Node])
    sideNodeArr = [];

    //_raycastType = ERaycastType.ALL;
    _ray = new geometry.ray();
    _maxDistance = 100;

    start() {
        systemEvent.on(SystemEventType.TOUCH_START, this._touchStart, this);
    }

    _touchStart(touch, event) {
        if(!_player_State.canClick || _player_State.isPassLevel)return;
        const camera = this.node.getComponent(CameraComponent);
        camera.screenPointToRay(touch._point.x, touch._point.y, this._ray);
        let result = PhysicsSystem.instance.raycastClosest(this._ray, Layers.Enum.DEFAULT, this._maxDistance);
        if (result) {
            const r = PhysicsSystem.instance.raycastClosestResult._collidier.node.getComponent(cubeNode);
            r.changeScale();
        }
    }

    // update (deltaTime) {
    //     // Your update function goes here.
    // }
}