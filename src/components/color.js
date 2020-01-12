import React from "react";
import randomcolor from "randomcolor";
import { ChromePicker } from "react-color";
import "./color.css";

class Color extends React.Component {
  count = 0;

  state = {
    color_array: [],
    displayColorPicker: false
  };

  handleChange = (colo, id) => {
    let colors = [...this.state.color_array];

    colors.forEach(color => {
      if (color.id === id) {
        color.col = colo.hex;
      }
    });

    this.setState({
      color_array: [...colors]
    });

    console.log(id);
  };

  colorpicker = (id, col) => {
    let colors = [...this.state.color_array];

    colors.forEach(color => {
      if (color.id === id) {
        color.displayColorPicker = !color.displayColorPicker;
      }
    });

    this.setState({
      color_array: [...colors]
    });
  };

  Close = () => {
    this.setState({ displayColorPicker: true });
  };

  new_div = () => {
    const object = {
      col: "",
      id: "",
      displayColorPicker: false,
      showClose: false
    };
    this.count = this.count + 1;
    object.id = this.count;

    var color = randomcolor();
    object.col = color;
    this.setState(
      {
        color_array: [...this.state.color_array, object]
      },
      () => console.log(this.state.color_array)
    );
  };

  //   closediv = id => {
  //     let colour = [...this.state.color_array];
  //     colour = colour.filter(i => i.id != id);
  //     this.setState({
  //       color_array: colour
  //     });
  //     console.log(this.state.color_array);
  //     console.log(colour);
  //   };

  closeColor = id => {
    this.setState({
      color_array: this.state.color_array.filter(e => e.id !== id)
    });
    console.log(this.state);
  };
  showClose = id => {
    const i = this.state.color_array.findIndex(e => e.id === id);
    const colors = [...this.state.color_array];
    const color = { ...colors[i] };
    color.showClose = true;
    colors[i] = color;
    this.setState({ color_array: colors });
  };
  hideClose = id => {
    const i = this.state.color_array.findIndex(e => e.id === id);
    const colors = [...this.state.color_array];
    const color = { ...colors[i] };
    color.showClose = false;
    colors[i] = color;
    this.setState({ color_array: colors });
  };
  render() {
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };

    return (
      <div>
        <div className="flex">
          {this.state.color_array.map((go, index) => (
            <div
              onMouseEnter={() => this.showClose(go.id)}
              onMouseLeave={() => this.hideClose(go.id)}
              className="center"
              key={index}
            >
              <div id="new-div" style={{ backgroundColor: go.col }}>
                <div
                  className="color-picker"
                  id="color-picker"
                  onClick={() => this.colorpicker(go.id, go.col)}
                >
                  <div>
                    {go.displayColorPicker ? (
                      <div style={popover}>
                        <div style={cover} onClick={this.Close} />
                        <ChromePicker
                          id="chrome"
                          color={go.col}
                          style="margin-left:54px;"
                          onChange={color => this.handleChange(color, go.id)}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              {go.showClose && (
                <div className="close" onClick={() => this.closeColor(go.id)}>
                  <div className="close-item">&times;</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <button
            className="btn btn-default"
            onClick={this.new_div}
            id="div_btn"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Color;
