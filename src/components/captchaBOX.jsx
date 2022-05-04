import { loadCaptchaEnginge,LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import React, { Component } from 'react'

export default class CaptchaBOX extends Component {
    componentDidMount () {
        loadCaptchaEnginge(4,'rgba(185,190,202,1)'); 
    };
    doSubmit = () => {
        let user_captcha_value = document.getElementById('user_captcha_input').value;
        if (validateCaptcha(user_captcha_value, false) === true) {
            this.props.isVerified=true
            console.log('Captcha Matched');
        }
        else {
            this.props.isVerified=false
            alert('Captcha Does Not Match');
        }
    };
    render() {
    return (
        <div>
           <div className="container">
                <div className="form-group" style={{display:'flex'}}>
                    <div className="col mt-3" style={{padding:'0px 25px'}}>
                        <LoadCanvasTemplateNoReload />
                    </div>
                    <div className="col mt-3">
                        <div><input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
                    </div>
                    <div className="col mt-3" style={{padding:'0px 10px'}}>
                        <div><button class="btn btn-primary" onClick={() => this.doSubmit()}>Submit</button></div>
                    </div>                  
                </div>
           </div>
       </div>);
  }
}
