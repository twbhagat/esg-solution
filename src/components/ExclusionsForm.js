import React, { Component } from 'react'

export default class ExclusionsForm extends Component {

    render() {
      
        return (
          
            <div>
              <section class="content-header">
                    <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h4>Fill out a quick and easy application</h4>
                        </div>
                    </div>
                    </div>
              </section>

                <div className="card card-success">
                    <div className="card-header">
                     <h5 className="card-title">Identify any corporate activites that you want to ensure are excluded from the firms that comprise your investment recommendation.</h5>
                    </div>
                    <div className="card-body"></div>
                </div>

                    <p>Select Exclusions from the list</p>

                {/*exclusions boxes*/}

                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                         <button class="btn">
                          <img src ="ex_1.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Adult Entertainment</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <button class="btn">
                          <img src ="ex_2.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Alcohol</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                         <button class="btn">
                          <img src ="ex_3.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Thermal Coal</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                         <button class="btn">
                          <img src ="ex_4.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Controversal Weapons and Involvement</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                         <button class="btn">
                          <img src ="ex_5.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Defense</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                         <button class="btn">
                          <img src ="ex_6.JPG"/>
                         </button>
                        <div class="info-box-content">
                            <span class="info-box-text">Recreational Drugs</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Firearms</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Fossil Fuels</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Gambling</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>
                </div>

                
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">GMO</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Nuclear</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Pork</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>
                </div>
                
                <div class="row"> 
                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Stem Cells</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>

                    <div class="col-md-3 col-sm-6 col-12">
                      <div class="info-box shadow-none">
                        <a class="btn btn-app"><i class="fas fa-play"></i></a>
                        <div class="info-box-content">
                            <span class="info-box-text">Tobacco</span>
                         <div class="form-group">
                        <label>Reason</label>
                        <input type="text" class="form-control" placeholder="Add Comments"/>
                         </div>
                        </div>
                     </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
