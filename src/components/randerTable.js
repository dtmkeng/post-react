import React, { Component } from 'react'
export default class RenderTaber extends Component {
    render() {
        return (
            <div>
                <div className='cell_row'>
                      <div className='title-table'>{this.props.date}</div>
                      <div>
                          <div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                          </div>
                      </div>
                </div>
            </div>
        )
    }
}
