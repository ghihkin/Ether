import React from "react";
import { getAllInfo } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
class Allinfo extends React.Component {
    constructor(props) {
        super(props);
        props.getAllInfo();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <div>all info</div>
            </div>
        );
    }
}
const MapDispatch = (dispatch) => {
    return {
        getAllInfo: bindActionCreators(getAllInfo, dispatch),
    };
};
const mapToState = (state) => state;
export default connect(mapToState, MapDispatch)(Allinfo);
