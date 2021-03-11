import React from "react";

const PYTHON_CODE = `
def func():
    return 5 + 7

func()

from matplotlib import pyplot as plt
plt.figure()
plt.plot(x, y)
plt.show()

`;

class Python extends React.Component {
  state = {
    output: ''
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <>
      { this.state.output }
    </>;
  }

  componentDidMount() {
    window.languagePluginLoader.then(() => {
      window.pyodide.loadPackage([]).then(() => {
        const output = window.pyodide.runPython(PYTHON_CODE);
        this.setState({ output: output });
      })
    });
  }
}

export default Python;
