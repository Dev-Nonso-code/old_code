

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.incrementByUser = exports.changeMyName = exports.decrement = exports.increment = void 0;

var _toolkit = require("@reduxjs/toolkit");

// import { Nav } from "../component/Navbar component/Nav";
var counterSlice = (0, _toolkit.createSlice)({
  name: "counter",
  initialState: {
    count: 0,
    myName: "nonsoglobal"
  },
  reducers: {
    increment: function increment(state) {
      state.count += 1;
    },
    decrement: function decrement(state) {
      state.count -= 1;
    },
    changeMyName: function changeMyName(state) {
      state.myName = "Obasi";
    },
    incrementByUser: function incrementByUser(state, actions) {
      state.count = state.count + actions.payload;
    }
  }
});
var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    changeMyName = _counterSlice$actions.changeMyName,
    incrementByUser = _counterSlice$actions.incrementByUser;
exports.incrementByUser = incrementByUser;
exports.changeMyName = changeMyName;
exports.decrement = decrement;
exports.increment = increment;
var _default = counterSlice.reducer;
exports["default"] = _default;