import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="hello every one"/>
                <h1>hello world</h1>
                <p onClick={this.clickHandler.bind(this)}>hello world</p>
            </div>
        )
    }
    componentDidMount(){
        alert("every thing is ok");
    }
    shouldcomponentUpdate(){
       console.log("every thing is ok");
    }

    clickHandler(e){
        e.preventDefault();
    }
}

export default Home
