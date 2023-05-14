import React, {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from './../UI/Button';

const AddUser = (props) => {
    const [enterUsername, setEnterUsername] = useState('');
    const [enterAge, setEnterAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
            return;
        }
        if (+enterAge < 1) {
            return;
        }
        console.log(enterUsername, enterAge)
        setEnterUsername('');
        setEnterAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnterUsername(event.target.value);

    }
    const ageChangeHandler = (event) => {
        setEnterAge(event.target.value);

    }
  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id="username" type='text' value={enterUsername} onChange={usernameChangeHandler}/>
        <label htmlFor='age'>Age (Years)</label>
        <input id="age" type='number' value={enterAge} onChange={ageChangeHandler}/>
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
  ); 
}

export default AddUser;