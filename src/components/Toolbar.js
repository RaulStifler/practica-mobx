import React,{Component} from 'react';
import { observer } from 'mobx-react';

class Toolbar extends Component {
  render () {
    return(
      <div className="toolbar"> 
      	{ this.props.store.units }
      </div>
    )
  }
}

export default observer(Toolbar);