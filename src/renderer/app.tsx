import React from 'react';
import { connect } from 'react-redux';
import { languageChange } from './redux/actions';

type DispatchProps = typeof mapDispatchToProps;
type AppProps = DispatchProps & {lng : string}

interface AppState {

}

export class App extends React.Component<AppProps, AppState> {

    constructor(props:AppProps) {
        super(props);
    }

    private makeItEnglish = () => {
        this.props.languageChange("en");
    }

    private makeItNotEnglish = () => {
        this.props.languageChange("not-en");
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
    return {
        lng: state.languageChange.lng
    };
};

const mapDispatchToProps = { languageChange };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
