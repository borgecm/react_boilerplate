import React, { Fragment } from 'react'
import './ProcessGraphic.css'

import { Tooltip } from 'reactstrap';

export default class ProcessGraphic extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)

        this.state = {
            tooltipOpen: false
        }
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }



    render() {
        const styles = {
            circleSize: {
                width: this.props.circleSize, 
                height: this.props.circleSize
            },
            lineSize: {
                width: this.props.lineSize
            }

        }

        const stagesLength = this.props.stages.length

        return (


            <div className="container">
                {this.props.stages.map((stage,i) =>

                    <Fragment key={i}>
                        <div id={`circle${stage.id}`} style={styles.circleSize} className={`circle ${stage.status}`}></div>
                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target={`circle${stage.id}`} toggle={this.toggle}> 
                            {stage.type}
                        </Tooltip>
                        {stagesLength === i + 1 ?  null : <hr style={styles.lineSize} className="line" />}
                        
                    </Fragment>
                )}
                
            </div>
        )}   
     
}