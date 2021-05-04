import React from "react";
import { useHistory } from "react-router-dom";
function Content() {
    const history = useHistory();
    return (
        <div>
            <div className="container content">
                <div className="row">
                    <div className="col-sm-3 talk">
                        <h1>TShirt </h1>
                        <h1>Designer</h1>
                        <br />
                        <h6 className="bold-four">
                        Create Designs Instantly.
<br/>

Simply add your text and explore dozens of customized layouts.          
          </h6>
                        <br />
                        <h6><a onClick={e=> history.push('/dashboard')} className="btn btn-primary btn-lg " href="/dashboard" >Start Designing</a></h6>
                    </div>
                    <div className="col-sm-9 img-responsive showcase-img">
                        {/* <div className="circle"></div> */}
                    </div>
                </div>
            </div>

            <section class="features-icons bg-light text-center det-ails">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Ease of use</h5>
                                <p class="lead mb-0">Easy to edit and view your updates.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Collection</h5>
                                <p class="lead mb-0">Save and review your design collection under Projects.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div class="features-icons-icon d-flex  icon-bra-ails">
                                    <i class="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5>Design and review</h5>
                                <p class="lead mb-0">Build your own designs in a few clicks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;