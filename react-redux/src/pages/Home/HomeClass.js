import { Component } from "react";
import { connect, useSelector } from "react-redux";

import { changeLanguageAction } from "../../store/actions/actions";

class Home extends Component {
  changeLanguage = () => {
    this.props.changeLanguageAction(this.props.lang.lang === "ar" ? "en" : "ar");
    // dispatch(changeLanguage)
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>Current lang : {this.props.lang.lang}</p>
        <button onClick={this.changeLanguage}>change language</button>
      </div>
    );
  }
}

// useSelector((state) => state.lang);
// useDispatch
const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, { changeLanguageAction })(Home);
