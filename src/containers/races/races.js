import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from 'moment';

import Widget from '../../components/widget/widget';
import actions from '../../redux/races/actions'

import RaceContent from '../../components/races/raceContent';
import racingImg from '../../images/racing.jpg'

const {
  getLatestRace
} = actions;

class Races extends Component {
  componentWillMount() {
    this.props.getLatestRace()
  }

  render() {
    const { race } = this.props;

    const content = (
      <RaceContent marketLength={race.marketLength} />
    )
    console.log(race)

    return (
      <div className="containers-wrapper">
        <Widget
          typeBet={'Race'}
          // time={moment()}
          time="1d 12h"
          content={content}
          imageUrl={racingImg}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { race } = state.Race.toJS();
  return {
    race
  };
}
export default connect(mapStateToProps, {
  getLatestRace
})(Races);
