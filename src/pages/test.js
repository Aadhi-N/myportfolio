import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false };
    };

    handleClick = () => {
        this.setState({ active: !this.state.active })
    }

    render() {
        return (
            <>
        <button onClick={this.handleClick}>Click Me</button>
          <div className={"container" + (this.state.active ? "  " : " is-hidden ")}>
                KJDSHFGKDJSFHGKDFHGKDFH
          </div>
          </>

        );

    }
    
}
  

export default Search;