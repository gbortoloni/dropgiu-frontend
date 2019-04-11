import React, { Component } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.svg';

import "./styles.css";

export default class Box extends Component {
    render() {
        return (
            <div id="box-container">
                <header>
                    <img src={logo} alt=""/>
                    <h1>Giuliano</h1>
                </header>

                <ul>
                    <li>
                        <a href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>1min</span>
                    </li>
                    <li>
                        <a href="">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>Desafio.pdf</strong>
                        </a>
                        <span>1min</span>
                    </li>
                </ul>
            </div>
        );
    }
}