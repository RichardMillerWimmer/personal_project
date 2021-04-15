import React, { Component } from 'react';
import styled from '@emotion/styled';


const Button = styled.button`
    background: none;
    color: white;
    font-family: Tahoma;
    letter-spacing: 1px;
    border: 1px solid white;
    border-radius: 4px;
    padding: 10px;
    margin: 0 10px;
    box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.3);
    cursor: pointer;
    transition: 0.5s;
    &:selected {
        color: #4e3fc0;
    }
    &:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: #4e3fc0;
        -webkit-transition: none;
        -moz-transition: none;
        transition: none;
      }
      &:hover:after {
        width: 110%;
        background-color: transparent;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        }
    `;

export default Button;



