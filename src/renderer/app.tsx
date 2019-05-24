import React from 'react';
import { connect } from 'react-redux';
import { languageChange } from './redux/actions';

import Store from './redux/store';

interface AppProps {
    lng: string
}

interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

    constructor(props:AppProps) {
        super(props);
    }

    private makeItEnglish = () => {
        Store.dispatch(languageChange("en"));
    }

    private makeItNotEnglish = () => {
        Store.dispatch(languageChange("not-en"));
    }

    render() {
        let lng = this.props.lng;

        return (
            <div>
                <div>My current language is {lng}</div>
                <br/>
                <button onClick={this.makeItEnglish}>English</button>
                <br/>
                <button onClick={this.makeItNotEnglish}>Not English</button>
            </div>


        )
    }
}

const mapStateToProps = (state:any) => {
    console.log(state);
    return {
        lng: state["languageChange"]["lng"]
    };
};

const mapDispatchToProps = { languageChange };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
