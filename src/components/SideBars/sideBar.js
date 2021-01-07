import React from 'react';
import './sideBar.css';

const SideBar = () => {
    return (
        <React.Fragment>
            <div id="propwrap">
                <div id="properties">
                    <div id="close">
                        <img src="assets/close.svg" alt='' />
                    </div>
                    <p id="header2">Properties</p>
                    <div id="propswitch">
                        <div id="dataprop">Data</div>
                        <div id="alertprop">Alerts</div>
                        <div id="logsprop">Logs</div>
                    </div>
                    <div id="proplist">
                        <p className="inputlabel">Select database</p>
                        <div className="dropme">Database 1 <img src="assets/dropdown.svg" alt='' /></div>
                        <p className="inputlabel">Check properties</p>
                        <div className="dropme">All<img src="assets/dropdown.svg" alt='' /></div>
                        <div className="checkus"><img src="assets/checkon.svg" alt=''/><p>Log on successful performance</p></div>
                            <div className="checkus">
                                <img src="assets/checkoff.svg" alt=''/><p>Give priority to this block</p>
                            </div>
                        </div>
                            <div id="divisionthing"></div>
                            <div id="removeblock">Delete blocks</div>
                    </div>
                </div>

                
        </React.Fragment>
    )
}

export default SideBar;