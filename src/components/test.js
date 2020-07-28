import React, { Component } from 'react';

class Test extends Component {

    render() {
        // let out = '';
        // for (let i=1; i<13; i++){
        //     out += `.col-xl-${i} {flex: 0 0 ${i/12 * 100}%; max-width: ${i/12 * 100}%}\n`;
        // }
        // console.log(out);
        return (
            <div className="page">
                <div className="row" style={{paddingTop: "50px"}}>
                    <div
                        className="col-12 col-md-6 col-lg-4"
                        style={{background: "white", textAlign: "center", color: "black", fontSize: "30px"}}
                    >
                        1
                    </div>
                    <div
                        className="col-12 col-md-6 col-lg-4 d-lg-none"
                        style={{background: "pink", textAlign: "center", color: "black", fontSize: "30px"}}
                    >
                        2
                    </div>
                    <div
                        className="col-12 col-md-6 col-lg-4 d-none d-md-block"
                        style={{background: "lightblue",textAlign: "center",  color: "black", fontSize: "30px"}}
                    >
                        3
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
