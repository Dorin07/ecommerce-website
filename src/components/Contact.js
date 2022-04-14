import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <ContactWrapper>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="team" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-md-8 col-lg-5 mx-auto mb-16">
                            <div className="card">
                                <img src={ "../img-contact/picture-1.jpg" } alt="Dorin" style={{}}/>
                                <div className="container">
                                    <h2 className="name">Dorin Cuibus</h2>
                                    <p className="title"> CEO &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>doriniosif03@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-8 col-lg-5 mx-auto mb-16">
                            <div class="card">
                                <img src={ "../img-contact/picture-2.jpg" } alt="Paul" style={{}} />
                                <div className="container">
                                    <h2 className="name">Paul Badiu</h2>
                                    <p className="title">Art Director</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p>p.badiu03@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContactWrapper>
            </React.Fragment>
        );
    }
}

const ContactWrapper = styled.div `
    .column {
        float: left;
        width: 50%;
        margin-bottom: 16px;
        padding: 0 8px;
    }
    
    @media screen and (max-width: 650px) {
        .column {
        width: 100%;
        display: block;
        }
    }
    
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    
    .container {
        padding: 0 16px;
    }
    
    .container::after, .row::after {
        content: "";
        clear: both;
        display: table;
    }
    
    .title {
        color: grey;
    }
    
    .name {
        text: bold;
        text: center;
    }

    .button {
        border: none;
        outline: 0;
        display: inline-block;
        padding: 8px;
        color: white;
        background-color: #000;
        text-align: center;
        cursor: pointer;
        width: 100%;
    }
    
    .button:hover {
        background-color: #555;
    }
`;