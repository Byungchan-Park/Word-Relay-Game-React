const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "제로초",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value: "",
      });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    const { word, value, result } = this.state;

    return (
      <>
        <div>{word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            ref={this.onRefInput}
            value={value}
            onChange={this.onChangeInput}
          />
          <input type="submit" value="입력!" />
        </form>
        <div>{result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
