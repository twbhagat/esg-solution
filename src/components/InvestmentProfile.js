import React, { Component } from 'react'

export default class InvestmentProfile extends Component {
    render() {
        return (
            <div>
                  <tr>
                    <td>
                      <div class="btn-group">
                        <button type="button" class="btn btn-info">Dashboard</button>
                        <button type="button" class="btn btn-info">Insights</button>
                        <button type="button" class="btn btn-info">Portfolio</button>
                      </div>
                    </td>
                    <td>   
                          <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Dropdown link</a>
                            <a class="dropdown-item" href="#">Dropdown link</a>
                          </div>                
                    </td>
                  </tr>

            </div>
        )
    }
}
