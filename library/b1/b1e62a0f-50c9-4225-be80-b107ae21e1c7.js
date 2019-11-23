"use strict";

System.register(["cc", "./cubeNode.js"], function (_export, _context) {
  "use strict";

  var _decorator, Component, PhysicsSystem, SystemEventType, systemEvent, geometry, CameraComponent, Layers, cubeNode, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, conCamera;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem = _cc.PhysicsSystem;
      SystemEventType = _cc.SystemEventType;
      systemEvent = _cc.systemEvent;
      geometry = _cc.geometry;
      CameraComponent = _cc.CameraComponent;
      Layers = _cc.Layers;
    }, function (_cubeNodeJs) {
      cubeNode = _cubeNodeJs.cubeNode;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "b1e62oPUMlCJb6AsQeuIeHH", "conCamera"); // begin conCamera


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("conCamera", conCamera = (_dec = ccclass("conCamera"), _dec2 = property([cc.Node]), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(conCamera, _Component);

        function conCamera() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, conCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(conCamera)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "sideNodeArr", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this._ray = new geometry.ray();
          _this._maxDistance = 100;
          return _this;
        }

        babelHelpers.createClass(conCamera, [{
          key: "start",
          value: function start() {
            systemEvent.on(SystemEventType.TOUCH_START, this._touchStart, this);
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(touch, event) {
            if (!_player_State.canClick || _player_State.isPassLevel) return;
            var camera = this.node.getComponent(CameraComponent);
            camera.screenPointToRay(touch._point.x, touch._point.y, this._ray);
            var result = PhysicsSystem.instance.raycastClosest(this._ray, Layers.Enum.DEFAULT, this._maxDistance);

            if (result) {
              var r = PhysicsSystem.instance.raycastClosestResult._collidier.node.getComponent(cubeNode);

              r.changeScale();
            }
          } // update (deltaTime) {
          //     // Your update function goes here.
          // }

        }]);
        return conCamera;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "sideNodeArr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end conCamera

    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3Q6Ly8vYXNzZXRzL3NjcmlwdHMvY29uQ2FtZXJhLmpzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQaHlzaWNzU3lzdGVtIiwiU3lzdGVtRXZlbnRUeXBlIiwic3lzdGVtRXZlbnQiLCJnZW9tZXRyeSIsIkNhbWVyYUNvbXBvbmVudCIsIkxheWVycyIsImN1YmVOb2RlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiY29uQ2FtZXJhIiwiY2MiLCJOb2RlIiwiX3JheSIsInJheSIsIl9tYXhEaXN0YW5jZSIsIm9uIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydCIsInRvdWNoIiwiZXZlbnQiLCJfcGxheWVyX1N0YXRlIiwiY2FuQ2xpY2siLCJpc1Bhc3NMZXZlbCIsImNhbWVyYSIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJzY3JlZW5Qb2ludFRvUmF5IiwiX3BvaW50IiwieCIsInkiLCJyZXN1bHQiLCJpbnN0YW5jZSIsInJheWNhc3RDbG9zZXN0IiwiRW51bSIsIkRFRkFVTFQiLCJyIiwicmF5Y2FzdENsb3Nlc3RSZXN1bHQiLCJfY29sbGlkaWVyIiwiY2hhbmdlU2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNJQSxNQUFBQSxVLE9BQUFBLFU7QUFDQUMsTUFBQUEsUyxPQUFBQSxTO0FBQ0FDLE1BQUFBLGEsT0FBQUEsYTtBQUVBQyxNQUFBQSxlLE9BQUFBLGU7QUFDQUMsTUFBQUEsVyxPQUFBQSxXO0FBQ0FDLE1BQUFBLFEsT0FBQUEsUTtBQUNBQyxNQUFBQSxlLE9BQUFBLGU7QUFDQUMsTUFBQUEsTSxPQUFBQSxNOztBQUdBQyxNQUFBQSxRLGVBQUFBLFE7OztnRkFWcUU7OztBQWFyRUMsTUFBQUEsTyxHQUVBVCxVLENBRkFTLE87QUFDQUMsTUFBQUEsUSxHQUNBVixVLENBREFVLFE7OzJCQUlTQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEMsVUFRSEMsUUFBUSxDQUFDLENBQUNFLEVBQUUsQ0FBQ0MsSUFBSixDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFJVEMsSSxHQUFPLElBQUlULFFBQVEsQ0FBQ1UsR0FBYixFO2dCQUNQQyxZLEdBQWUsRzs7Ozs7O2tDQUVQO0FBQ0paLFlBQUFBLFdBQVcsQ0FBQ2EsRUFBWixDQUFlZCxlQUFlLENBQUNlLFdBQS9CLEVBQTRDLEtBQUtDLFdBQWpELEVBQThELElBQTlEO0FBQ0g7OztzQ0FFV0MsSyxFQUFPQyxLLEVBQU87QUFDdEIsZ0JBQUcsQ0FBQ0MsYUFBYSxDQUFDQyxRQUFmLElBQTJCRCxhQUFhLENBQUNFLFdBQTVDLEVBQXdEO0FBQ3hELGdCQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCckIsZUFBdkIsQ0FBZjtBQUNBbUIsWUFBQUEsTUFBTSxDQUFDRyxnQkFBUCxDQUF3QlIsS0FBSyxDQUFDUyxNQUFOLENBQWFDLENBQXJDLEVBQXdDVixLQUFLLENBQUNTLE1BQU4sQ0FBYUUsQ0FBckQsRUFBd0QsS0FBS2pCLElBQTdEO0FBQ0EsZ0JBQUlrQixNQUFNLEdBQUc5QixhQUFhLENBQUMrQixRQUFkLENBQXVCQyxjQUF2QixDQUFzQyxLQUFLcEIsSUFBM0MsRUFBaURQLE1BQU0sQ0FBQzRCLElBQVAsQ0FBWUMsT0FBN0QsRUFBc0UsS0FBS3BCLFlBQTNFLENBQWI7O0FBQ0EsZ0JBQUlnQixNQUFKLEVBQVk7QUFDUixrQkFBTUssQ0FBQyxHQUFHbkMsYUFBYSxDQUFDK0IsUUFBZCxDQUF1Qkssb0JBQXZCLENBQTRDQyxVQUE1QyxDQUF1RGIsSUFBdkQsQ0FBNERDLFlBQTVELENBQXlFbkIsUUFBekUsQ0FBVjs7QUFDQTZCLGNBQUFBLENBQUMsQ0FBQ0csV0FBRjtBQUNIO0FBQ0osVyxDQUVEO0FBQ0E7QUFDQTs7OztRQS9CMkJ2QyxTOzs7OztpQkFRYixFOzs7O29CQTFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBfZGVjb3JhdG9yLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgUGh5c2ljc1N5c3RlbSxcclxuICAgIE5vZGUsXHJcbiAgICBTeXN0ZW1FdmVudFR5cGUsXHJcbiAgICBzeXN0ZW1FdmVudCxcclxuICAgIGdlb21ldHJ5LFxyXG4gICAgQ2FtZXJhQ29tcG9uZW50LFxyXG4gICAgTGF5ZXJzXHJcbn0gZnJvbSBcImNjXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjdWJlTm9kZVxyXG59IGZyb20gXCIuL2N1YmVOb2RlXCI7XHJcbmNvbnN0IHtcclxuICAgIGNjY2xhc3MsXHJcbiAgICBwcm9wZXJ0eVxyXG59ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiY29uQ2FtZXJhXCIpXHJcbmV4cG9ydCBjbGFzcyBjb25DYW1lcmEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcclxuICAgIHNpZGVOb2RlQXJyID0gW107XHJcblxyXG4gICAgLy9fcmF5Y2FzdFR5cGUgPSBFUmF5Y2FzdFR5cGUuQUxMO1xyXG4gICAgX3JheSA9IG5ldyBnZW9tZXRyeS5yYXkoKTtcclxuICAgIF9tYXhEaXN0YW5jZSA9IDEwMDtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIF90b3VjaFN0YXJ0KHRvdWNoLCBldmVudCkge1xyXG4gICAgICAgIGlmKCFfcGxheWVyX1N0YXRlLmNhbkNsaWNrIHx8IF9wbGF5ZXJfU3RhdGUuaXNQYXNzTGV2ZWwpcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ2FtZXJhQ29tcG9uZW50KTtcclxuICAgICAgICBjYW1lcmEuc2NyZWVuUG9pbnRUb1JheSh0b3VjaC5fcG9pbnQueCwgdG91Y2guX3BvaW50LnksIHRoaXMuX3JheSk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFBoeXNpY3NTeXN0ZW0uaW5zdGFuY2UucmF5Y2FzdENsb3Nlc3QodGhpcy5fcmF5LCBMYXllcnMuRW51bS5ERUZBVUxULCB0aGlzLl9tYXhEaXN0YW5jZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5fY29sbGlkaWVyLm5vZGUuZ2V0Q29tcG9uZW50KGN1YmVOb2RlKTtcclxuICAgICAgICAgICAgci5jaGFuZ2VTY2FsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZSkge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufSJdfQ==