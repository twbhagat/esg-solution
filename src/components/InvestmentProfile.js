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

                    <br/>

                <div class="row">
                    <div class="col-sm-6">
                    <div class="card card-outline card-info">
                        <div class="card-header">
                            <h3 class="card-title">ESG Profile Summary</h3>
                        {/* <div class="card-body">
                            <canvas id="donutChart" style="min-height: 1px; height: 1px; max-height: 1px; max-width: 2%;"></canvas>
                        </div> */}
                        </div>
                    </div>
                    </div>
                    

                     <div class="col-sm-6">
                        <div class="card card-outline card-info">
                         <div class="card-header">
                            <h3 class="card-title">SRI Vision Board</h3>
                         </div>
                        </div>
                     </div>
                    </div>

                <div class="row">
                    <div class="col-sm-3">
                            <div class="card card-outline card-info">
                            <div class="card-header">
                                <h3 class="card-title">Values Alignment Overview</h3>
                                
                                    <div class="col">
                                      <div class="row-sm-3">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">Investment Goal</span>
                                            <span class="info-box-number">2 Million</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="row-sm-3">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">Investment Value</span>
                                            <span class="info-box-number">1.5M Dollars</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="row-sm-6">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">ESG Values Alignment Score</span>
                                            <span class="info-box-number">69.55</span>
                                        </div>
                                        </div>
                                    </div>
                                  </div>
                                
                            </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                        <div class="card card-outline card-info">
                         <div class="card-header">
                            <h3 class="card-title">Overview</h3>
                         </div>
                        </div>
                     </div>

                     <div class="col-sm-3">
                        <div class="card card-outline card-info">
                         <div class="card-header">
                            <h3 class="card-title">ESG News Feed</h3>
                            <div class="col">
                                      <div class="row-sm-3">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">News 1</span>
                                            <span class="info-box-number">NYT</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="row-sm-3">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">News 2</span>
                                            <span class="info-box-number">The Onion</span>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="row-sm-6">
                                        <div class="info-box">
                                        <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">News 3</span>
                                            <span class="info-box-number">Buzzfeed</span>
                                        </div>
                                        </div>
                                    </div>
                                  </div>
                         </div>
                        </div>
                     </div>
                </div>
            

            </div>
        )
    }
}
