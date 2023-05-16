import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App

function Header(props) {

    return (
        <h1>{props.title}</h1>
    )
}

function App() {

    return (
        <div className="wrapper">
            <Header
                title='xin chao ae'
            />

        </div>


    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

