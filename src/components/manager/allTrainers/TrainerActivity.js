import React, { Component } from 'react'
export default class TrainerActivity extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="cell" data-title="ActivityName">
                        {this.props.ActivityName}
                    </div>
                    <div className="cell" data-title="ActivityDescription">
                        {this.props.ActivityDescription}
                    </div>
                    <div className="cell" data-title="ActivityLocation">
                        {this.props.ActivityLocation}
                    </div>
                    <div className="cell" data-title="ActivityState">
                        {this.props.ActivityState}
                    </div>
                </div>

            </>
        )



    }

}