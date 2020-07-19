class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visible: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'hide details' : 'Show details'}</button>
                <p hidden={!this.state.visible}>lorem epsom chi haja</p>
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))

// let visible = false
// const onTaggleParagraph = () => {
//     visible = !visible
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onTaggleParagraph}>{visible ? 'hide details' : 'Show details'}</button>
//             <p hidden={!visible}>lorem epsom chi haja</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot)
// }

// render();