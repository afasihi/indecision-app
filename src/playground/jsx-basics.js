console.log('app is running');

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

//JSX - JavaScript XML

const content = {
    title: 'Indecision App',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if (option) {
        content.options.push(option);
        event.target.elements.option.value = '';
    }
    renderTemplate();
}

const removeAll = () => {
    content.options = [];
    renderTemplate();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * content.options.length);
    const option = content.options[randomNum]
}

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{content.title}</h1>
            {content.subtitle && <p> {content.subtitle}</p>}
            <p>{content.options.length > 0 ? 'Here are your options' : 'no options'}</p>
            <button disabled={content.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <ol>
                {
                    content.options.map((item) =><li key={item}>{item}</li>)
                }
            </ol>
            <button onClick={removeAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

renderTemplate();






// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
// }
// renderCounterApp();