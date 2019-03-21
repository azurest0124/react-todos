import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {



    render() {
        const { done, children, onToggle, onRemove } = this.props;
        return (
            <div onClick={onToggle} className={cx('todo-item')}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly></input>
                <div className={cx('text', { done })}>{children}</div>
                <div className={cx('delete')} onClick={onRemove}>[Remove]</div>
            </div>
        )
    }
}

export default TodoItem; 