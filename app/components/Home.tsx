import * as React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes.json';
import * as styles from './Home.css';

export default class Home extends React.Component {
  public render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
