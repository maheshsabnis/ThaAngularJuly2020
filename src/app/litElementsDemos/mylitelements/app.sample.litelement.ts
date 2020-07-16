import {LitElement, html, property, css, customElement} from 'lit-element';

// define external style

const globalStyle = css `
   input {
    color: 'yellow';
    background-color: 'red';
   }
`;

@customElement('first-element')
export class FirstLitElement extends LitElement {

  // for the static properties declaration (e.g. value1, value2, etc), the compiler
  // will produce errors and hence will crash app in browser. To get rid of it
  // use the indexer declaration that will define rule for Property declarations
  // in ES 6
  // x is property name which will be string always
  // and 'any' is typeof the property that will be inferred at runtime
  [x: string]: any; // babel-es6 parser for TypeScript


  // @property, is used to define custom-attribute-property
  // for LitElement when it is used in different JavaScript
  // library/framework
  @property({type: String}) data: string;

  // static properties declaration
  static get properties() {
    return {
      value1: {type: String},
      value2: {type: String},
      values: {type: Array}
    };
  }



  constructor(){
    super();
    // define initial values for the properties
    this.value1 = 'The Value 1';
    this.value2 = 'The Value 2';
    this.values = [10,20,30,40];
  }



  // defining style
  static get styles() {
    return [
      globalStyle,
      css `div {color: red;}`
    ];

  }

  emitValue() {
      this.value1 = 'ffff';
      // LitElements makes use of Standard JavaScript
      // Dispatch Event Mechanism to emit / bubble event
      // from LitElement to its parent
      // declare the event using 'CustomEvent()' object
      const myevent = new CustomEvent('btn-click', {
          detail: {
             message: JSON.stringify({id:101,name:'A'})
          },
          bubbles: true,
          composed: true
      });

      this.dispatchEvent(myevent);
  }


  render() {
    return html `
      <div>
        <h4>The First Lit Element</h4>
        <div>
          ${this.values}
        </div>
        <p>The Data To be Shown here</p>
        <div>
          <strong> ${this.data.toUpperCase()} </strong>
        </div>
        <br/>
        <input type="button" value="click me"
         @click="${this.emitValue}"/>
         <div>
           <p>
             <strong>
                ${this.value1}
                <hr/>
                ${this.value2}
             </strong>
           </p>
         </div>
      </div>
    `;
  }

  // firstUpdated(changedProperties) {
  //   console.log('First Update');
  //   changedProperties.forEach((oldValue, propName) => {
  //     console.log(`${propName} changed. oldValue: ${oldValue}`);
  //   });
  // }
  // shouldUpdate(changedProperties) {
  //   console.log('shouldUpdate ' + this.data);

  //   changedProperties.forEach((oldValue, propName) => {
  //     console.log(`${propName} changed. oldValue: ${oldValue}`);
  //   });
  //   return changedProperties.has('DataSource');
  // }
  // update() {
  //   console.log('update');
  // }

}
