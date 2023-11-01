import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {fetchTeamData, fetchTeammateData} from '../../../store/actions';
import {handleFailureCallback} from '../../../util/apiHelper';
import DashboardComponent from '../component/';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.callFetchTeamData();
    this.callFetchTeammateData();
  }

  callFetchTeamData = () => {
    this.props.fetchTeamData(this.props?.userPreference?.account_id, 1, {
      SuccessCallback: res => {
      },
      FailureCallback: res => {
        handleFailureCallback(res);
      },
    });
  };

  callFetchTeammateData = () => {
    let param = {
      order_by: 'user',
      order: 'asc',
      pagination: {limit: 20, offset: 1},
    };
    this.props.fetchTeammateData(
      this.props?.userPreference?.account_id,
      param,
      {
        SuccessCallback: res => {

        },
        FailureCallback: res => {
          handleFailureCallback(res);
        },
      },
    );
  };

  render() {
    const {teamData, teamMateData} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <DashboardComponent data={{}} />
      </SafeAreaView>
    );
  }
}

const mapActionCreators = {
  fetchTeamData,
  fetchTeammateData,
};
const mapStateToProps = state => {
  return {
    isLoading: state.global.loading,
    teamData: state.accountReducer?.teamData?.teams,
    teamMateData: state.accountReducer?.teamMateData?.users,
    userPreference: state.detail?.userPreference,
  };
};
export default connect(mapStateToProps, mapActionCreators)(DashboardContainer);
