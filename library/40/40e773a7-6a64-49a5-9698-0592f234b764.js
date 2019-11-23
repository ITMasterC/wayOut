"use strict";

System.register(["cc", "./planeNode.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, Vec3, tweenUtil, ModelComponent, planeNode, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, cubeNode;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tweenUtil = _cc.tweenUtil;
      ModelComponent = _cc.ModelComponent;
    }, function (_planeNodeJs) {
      planeNode = _planeNodeJs.planeNode;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "40e77OnamRJpZaYBZLyNLdk", "cubeNode"); // begin cubeNode


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("cubeNode", cubeNode = (_dec = ccclass("cubeNode"), _dec2 = property([cc.Material]), _dec3 = property([cc.Material]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(cubeNode, _Component);

        function cubeNode() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, cubeNode);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(cubeNode)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "index", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "materialsUp", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "materialsDown", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this._scale = new Vec3(0, 0, 0);
          _this._pos = new Vec3(0, 0, 0);
          return _this;
        }

        babelHelpers.createClass(cubeNode, [{
          key: "start",
          value: function start() {}
        }, {
          key: "init",
          value: function init(index, flag) {
            this.index = index;

            if (flag < 0) {
              this.type = Math.abs(flag);
              this.node.scale = new Vec3(0.8, 0.4, 0.8);
              this.node.position = new Vec3(this.node.position.x, 0.2, this.node.position.z);
              this.node.getComponent(ModelComponent).material = this.materialsDown[this.type - 1];
            } else {
              this.type = Math.abs(flag); //this.node.scale = new Vec3(0.9, 0.45, 0.9);

              this.node.getComponent(ModelComponent).material = this.materialsUp[this.type - 1];
            }

            window.Notification.on('changeSideNode', this.changeSideNode, this); // console.log('==============this.index', this.index);
          }
        }, {
          key: "changeSideNode",
          value: function changeSideNode(index, type) {
            // console.log('-----------index----', index, type);
            if (type == 1) {
              if (Math.abs(this.index - index) == 1) {
                if (Math.floor(this.index / window.x_length) == Math.floor(index / window.x_length)) {
                  this.changeScale(false);
                }
              } else if (Math.abs(this.index - index) == window.x_length) {
                this.changeScale(false);
              }
            } else if (type == 2) {
              if (Math.abs(this.index - index) == 1) {
                if (Math.floor(this.index / window.x_length) == Math.floor(index / window.x_length)) {
                  this.changeScale(false);
                }
              }
            } else if (type == 3) {
              if (Math.abs(this.index - index) == window.x_length) {
                this.changeScale(false);
              }
            }
          }
        }, {
          key: "onDestroy",
          value: function onDestroy() {
            this.node.scale = 0.8;
            this.index = 0;
            window.Notification.targetOff(this); //this.node.getComponent(ModelComponent).material = this.materials[0];
          }
        }, {
          key: "changeScale",
          value: function changeScale() {
            var _this2 = this;

            var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            _player_State.canClick = false; // console.log('==============开始动画', this.index);
            // if(flag){
            //     this.scheduleOnce(function(){
            //         window.Notification.emit('changeSideNode', this.index);
            //     }, 0.1);
            // }

            var endScaleY = 0.4;

            if (this.node.scale.y == 0.4) {
              endScaleY = 0.8;
              _player_State.complateCount--; //this.node.parent.getComponent(planeNode).changeComplate(-1);

              this.node.getComponent(ModelComponent).material = this.materialsUp[this.type - 1];
            } else if (this.node.scale.y == 0.8) {
              endScaleY = 0.4;
              _player_State.complateCount++; //this.node.parent.getComponent(planeNode).changeComplate(1);

              this.node.getComponent(ModelComponent).material = this.materialsDown[this.type - 1];
            }

            Vec3.copy(this._scale, this.node.scale);
            Vec3.copy(this._pos, this.node.position);
            tweenUtil(this._scale).to(0.1, new Vec3(this._scale.x, endScaleY, this._scale.z), {
              easing: 'Bounce-InOut',
              onUpdate: function onUpdate() {
                _this2.node.scale = _this2._scale;
              }
            }).call(function () {
              //缓动结束回调
              if (flag) window.Notification.emit('changeSideNode', _this2.index, _this2.type);
              _player_State.canClick = true;

              _this2.node.parent.getComponent(planeNode).changeComplate(-1);
            }).union().repeat(1).start();
            tweenUtil(this._pos).to(0.1, new Vec3(this._pos.x, endScaleY / 2, this._pos.z), {
              easing: 'Bounce-InOut',
              onUpdate: function onUpdate() {
                _this2.node.position = _this2._pos;
              }
            }).union().repeat(1).start();
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return cubeNode;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "index", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "materialsUp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "materialsDown", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end cubeNode

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY3ViZU5vZGUuanMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJ0d2VlblV0aWwiLCJNb2RlbENvbXBvbmVudCIsInBsYW5lTm9kZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsImN1YmVOb2RlIiwiY2MiLCJNYXRlcmlhbCIsIl9zY2FsZSIsIl9wb3MiLCJpbmRleCIsImZsYWciLCJ0eXBlIiwiTWF0aCIsImFicyIsIm5vZGUiLCJzY2FsZSIsInBvc2l0aW9uIiwieCIsInoiLCJnZXRDb21wb25lbnQiLCJtYXRlcmlhbCIsIm1hdGVyaWFsc0Rvd24iLCJtYXRlcmlhbHNVcCIsIndpbmRvdyIsIk5vdGlmaWNhdGlvbiIsIm9uIiwiY2hhbmdlU2lkZU5vZGUiLCJmbG9vciIsInhfbGVuZ3RoIiwiY2hhbmdlU2NhbGUiLCJ0YXJnZXRPZmYiLCJfcGxheWVyX1N0YXRlIiwiY2FuQ2xpY2siLCJlbmRTY2FsZVkiLCJ5IiwiY29tcGxhdGVDb3VudCIsImNvcHkiLCJ0byIsImVhc2luZyIsIm9uVXBkYXRlIiwiY2FsbCIsImVtaXQiLCJwYXJlbnQiLCJjaGFuZ2VDb21wbGF0ZSIsInVuaW9uIiwicmVwZWF0Iiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBR0FDLE1BQUFBLEksT0FBQUEsSTtBQUNBQyxNQUFBQSxTLE9BQUFBLFM7QUFFQUMsTUFBQUEsYyxPQUFBQSxjOztBQUdBQyxNQUFBQSxTLGdCQUFBQSxTOzs7K0VBVHFFOzs7QUFZckVDLE1BQUFBLE8sR0FFQU4sVSxDQUZBTSxPO0FBQ0FDLE1BQUFBLFEsR0FDQVAsVSxDQURBTyxROzswQkFJU0MsUSxXQURaRixPQUFPLENBQUMsVUFBRCxDLFVBU0hDLFFBQVEsQ0FBQyxDQUFDRSxFQUFFLENBQUNDLFFBQUosQ0FBRCxD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QixJQUFMLENBQVVVLENBQS9DLENBRGIsRUFDZ0U7QUFDeERvQixjQUFBQSxNQUFNLEVBQUUsY0FEZ0Q7QUFFeERDLGNBQUFBLFFBQVEsRUFBRSxvQkFBTTtBQUNaLGdCQUFBLE1BQUksQ0FBQ3pCLElBQUwsQ0FBVUUsUUFBVixHQUFxQixNQUFJLENBQUNSLElBQTFCO0FBQ0g7QUFKdUQsYUFEaEUsRUFPS29DLEtBUEwsR0FRS0MsTUFSTCxDQVFZLENBUlosRUFTS0MsS0FUTDtBQVVILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUF2SDBCakQsUyw2RkFLekJNLFE7Ozs7O2lCQUNPLEM7Ozs7Ozs7aUJBR00sRTs7Ozs7OztpQkFFRSxFOzs7O29CQTVCRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgTm9kZSxcclxuICAgIFRleHR1cmUyRCxcclxuICAgIFZlYzMsXHJcbiAgICB0d2VlblV0aWwsXHJcbiAgICBNYXRlcmlhbCxcclxuICAgIE1vZGVsQ29tcG9uZW50XHJcbn0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7XHJcbiAgICBwbGFuZU5vZGVcclxufSBmcm9tIFwiLi9wbGFuZU5vZGVcIjtcclxuY29uc3Qge1xyXG4gICAgY2NjbGFzcyxcclxuICAgIHByb3BlcnR5XHJcbn0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJjdWJlTm9kZVwiKVxyXG5leHBvcnQgY2xhc3MgY3ViZU5vZGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgaW5kZXggPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuTWF0ZXJpYWxdKVxyXG4gICAgbWF0ZXJpYWxzVXAgPSBbXTtcclxuICAgIEBwcm9wZXJ0eShbY2MuTWF0ZXJpYWxdKVxyXG4gICAgbWF0ZXJpYWxzRG93biA9IFtdO1xyXG5cclxuICAgIF9zY2FsZSA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG4gICAgX3BvcyA9IG5ldyBWZWMzKDAsIDAsIDApO1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0KGluZGV4LCBmbGFnKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIGlmIChmbGFnIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBNYXRoLmFicyhmbGFnKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gbmV3IFZlYzMoMC44LCAwLjQsIDAuOCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ldyBWZWMzKHRoaXMubm9kZS5wb3NpdGlvbi54LCAwLjIsIHRoaXMubm9kZS5wb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc0Rvd25bdGhpcy50eXBlLTFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IE1hdGguYWJzKGZsYWcpO1xyXG4gICAgICAgICAgICAvL3RoaXMubm9kZS5zY2FsZSA9IG5ldyBWZWMzKDAuOSwgMC40NSwgMC45KTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCkubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsc1VwW3RoaXMudHlwZS0xXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93Lk5vdGlmaWNhdGlvbi5vbignY2hhbmdlU2lkZU5vZGUnLCB0aGlzLmNoYW5nZVNpZGVOb2RlLCB0aGlzKTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PXRoaXMuaW5kZXgnLCB0aGlzLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTaWRlTm9kZShpbmRleCwgdHlwZSkge1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0taW5kZXgtLS0tJywgaW5kZXgsIHR5cGUpO1xyXG4gICAgICAgIGlmKHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmluZGV4IC0gaW5kZXgpID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKHRoaXMuaW5kZXggLyB3aW5kb3cueF9sZW5ndGgpID09IE1hdGguZmxvb3IoaW5kZXggLyB3aW5kb3cueF9sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnModGhpcy5pbmRleCAtIGluZGV4KSA9PSB3aW5kb3cueF9sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU2NhbGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYodHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMuaW5kZXggLSBpbmRleCkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IodGhpcy5pbmRleCAvIHdpbmRvdy54X2xlbmd0aCkgPT0gTWF0aC5mbG9vcihpbmRleCAvIHdpbmRvdy54X2xlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVNjYWxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKHR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLmluZGV4IC0gaW5kZXgpID09IHdpbmRvdy54X2xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTY2FsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDAuODtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB3aW5kb3cuTm90aWZpY2F0aW9uLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICAvL3RoaXMubm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2NhbGUoZmxhZyA9IHRydWUpIHtcclxuICAgICAgICBfcGxheWVyX1N0YXRlLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT3lvIDlp4vliqjnlLsnLCB0aGlzLmluZGV4KTtcclxuICAgICAgICAvLyBpZihmbGFnKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgICAgIHdpbmRvdy5Ob3RpZmljYXRpb24uZW1pdCgnY2hhbmdlU2lkZU5vZGUnLCB0aGlzLmluZGV4KTtcclxuICAgICAgICAvLyAgICAgfSwgMC4xKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IGVuZFNjYWxlWSA9IDAuNDtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnNjYWxlLnkgPT0gMC40KSB7XHJcbiAgICAgICAgICAgIGVuZFNjYWxlWSA9IDAuODtcclxuICAgICAgICAgICAgX3BsYXllcl9TdGF0ZS5jb21wbGF0ZUNvdW50LS07XHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQocGxhbmVOb2RlKS5jaGFuZ2VDb21wbGF0ZSgtMSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoTW9kZWxDb21wb25lbnQpLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbHNVcFt0aGlzLnR5cGUtMV07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm5vZGUuc2NhbGUueSA9PSAwLjgpIHtcclxuICAgICAgICAgICAgZW5kU2NhbGVZID0gMC40O1xyXG4gICAgICAgICAgICBfcGxheWVyX1N0YXRlLmNvbXBsYXRlQ291bnQrKztcclxuICAgICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChwbGFuZU5vZGUpLmNoYW5nZUNvbXBsYXRlKDEpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KS5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzRG93blt0aGlzLnR5cGUtMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFZlYzMuY29weSh0aGlzLl9zY2FsZSwgdGhpcy5ub2RlLnNjYWxlKTtcclxuICAgICAgICBWZWMzLmNvcHkodGhpcy5fcG9zLCB0aGlzLm5vZGUucG9zaXRpb24pO1xyXG4gICAgICAgIHR3ZWVuVXRpbCh0aGlzLl9zY2FsZSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgbmV3IFZlYzModGhpcy5fc2NhbGUueCwgZW5kU2NhbGVZLCB0aGlzLl9zY2FsZS56KSwge1xyXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnQm91bmNlLUluT3V0JyxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gdGhpcy5fc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v57yT5Yqo57uT5p2f5Zue6LCDXHJcbiAgICAgICAgICAgICAgICBpZiAoZmxhZykgd2luZG93Lk5vdGlmaWNhdGlvbi5lbWl0KCdjaGFuZ2VTaWRlTm9kZScsIHRoaXMuaW5kZXgsIHRoaXMudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBfcGxheWVyX1N0YXRlLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KHBsYW5lTm9kZSkuY2hhbmdlQ29tcGxhdGUoLTEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudW5pb24oKVxyXG4gICAgICAgICAgICAucmVwZWF0KDEpXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICB0d2VlblV0aWwodGhpcy5fcG9zKVxyXG4gICAgICAgICAgICAudG8oMC4xLCBuZXcgVmVjMyh0aGlzLl9wb3MueCwgZW5kU2NhbGVZIC8gMiwgdGhpcy5fcG9zLnopLCB7XHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdCb3VuY2UtSW5PdXQnLFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLl9wb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC51bmlvbigpXHJcbiAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWUpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn0iXX0=