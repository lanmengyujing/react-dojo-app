import React, { Component } from 'react';
import './Button.css';
import styles from './Button.module.css'; // Import css modules stylesheet as styles

export default class Button extends Component {
  render() {
    return <div className={`${styles.error}  Button`} />;
  }
}
