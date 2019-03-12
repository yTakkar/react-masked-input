# input-masked-react

A fully customizable masked input component for the web built with React.

![GIPHY](https://media.giphy.com/media/9JiszPVOX5FuPfJm39/giphy.gif)

[CodeSandbox](https://codesandbox.io/s/yqolrnk749)

## Installation

```
yarn add input-masked-react
```

#### Basic usage:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    separator={<span>-</span>}
  />
```

##### With styles applied to each input:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
  />
```

##### When inputs are disabled:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    disabled
    disabledStyle={{
      background: 'red'
    }}
  />
```

##### When inputs are focused:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    focusStyle={{
      outline: 0
    }}
  />
```

##### With placeholder for each input:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    placeholder='Y'
  />
```

##### With group separation:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={8}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    placeholder='Y'
    groupSeperatorPositions={[1, 3]}
    groupSeperator={<div style={{ width: 15 }} />}
  />
```

##### With individual input props:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={8}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    inputPropsMap={{
      0: { placeholder: "D", style: { width: 30 } },
      1: { placeholder: "D" },
      2: { placeholder: "M" },
      3: { placeholder: "M" },
      4: { placeholder: "Y" },
      5: { placeholder: "Y" },
      6: { placeholder: "Y" },
      7: { placeholder: "Y" },
    }}
    groupSeperatorPositions={[1, 3]}
    groupSeperator={<div style={{ width: 15 }} />}
  />
```

##### With error:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    onChange={otp => console.log(otp)}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    error
    errorText={
      <div style={{ color: "red", marginTop: 10 }}>
        An error has occured!
      </div>
    }
  />
```

### Use cases

##### For Date Of Birth:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <OtpInput
    numInputs={8}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    inputPropsMap={{
      0: { placeholder: "D" },
      1: { placeholder: "D" },
      2: { placeholder: "M" },
      3: { placeholder: "M" },
      4: { placeholder: "Y" },
      5: { placeholder: "Y" },
      6: { placeholder: "Y" },
      7: { placeholder: "Y" }
    }}
    groupSeperatorPositions={[1, 3]}
    groupSeperator={<div style={{ width: 15 }} />}
    onChange={data => console.log(data)}
  />
```

##### For OTP:

```javascript
import React from 'react';
import MaskedInput from 'input-masked-react';

const App = props => 
  <MaskedInput
    numInputs={4}
    inputStyle={{
      border: 0,
      borderBottom: "1px solid #DFE0E3",
      width: 20,
      height: 30
    }}
    separator={<span>&nbsp;&nbsp;&nbsp;</span>}
    placeholder={"•"}
    onChange={data => console.log(data)}
  />
```

## API

<table>
  <tr>
    <th>Name<br></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numInputs</td>
    <td>number</td>
    <td><strong>true</strong></td>
    <td>4</td>
    <td>Number of OTP inputs to be rendered.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td><strong>true</strong></td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>component<br></td>
    <td>false</td>
    <td>[space]</td>
    <td>Provide a custom separator between inputs by passing a component. For instance, <code>&lt;span&gt;-&lt;/span&gt;</code> would add <code>-</code> between each input</td>
  </tr>
  <tr>
    <td>containerStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to container of inputs.</td>
  </tr>
  <tr>
    <td>inputStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input.</td>
  </tr>
  <tr>
    <td>focusStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to inputs on focus.</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Disables all the inputs.</td>
  </tr>
  <tr>
    <td>disabledStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when disabled.</td>
  </tr>
  <tr>
    <td>error</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Indicates there is an error in the inputs.</td>
  </tr>
  <tr>
    <td>errorStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when errored.</td>
  </tr>
  <tr>
    <td>shouldAutoFocus</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Auto focuses input on inital page load.</td>
  </tr>
  <tr>
    <td>isInputNum</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Restrict input to only numbers.</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>string</td>
    <td>false</td>
    <td>none</td>
    <td>Placeholder for each input</td>
  </tr>
  <tr>
    <td>errorText</td>
    <td>ReactNode</td>
    <td>false</td>
    <td>none</td>
    <td>Error message to show</td>
  </tr>
  <tr>
    <td>groupSeperator</td>
    <td>ReactNode</td>
    <td>false</td>
    <td>none</td>
    <td>React element to show at groupSeperatorPositions</td>
  </tr>
  <tr>
    <td>groupSeperatorPositions</td>
    <td>Object</td>
    <td>false</td>
    <td>{}</td>
    <td>Positions when to show groupSeperator</td>
  </tr>
  <tr>
    <td>inputPropsMap</td>
    <td>Object</td>
    <td>false</td>
    <td>{}</td>
    <td>An object with props specifically for individual inputs</td>
  </tr>
</table>
