import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state.addTrack = this.state.addTrack.bind(this);
    this.state.removeTrack = this.state.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>`${this.props.track.artist} | ${this.props.track.album}`</p>
        </div>
        <a className="Track-action">
        renderAction() {
          if (this.props.isRemoval is true) {
            <a onClick={this.removeTrack}> - </a>
          }
          else {
            <a onClick={this.addTrack}> + </a>
          }
        }
        </a>
      </div>
    )
  }
}

export default Track;
