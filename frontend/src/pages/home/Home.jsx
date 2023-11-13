import './home.scss';
//import { List } from '../../components/list/List';
import { useEffect, useState } from "react";
//import { AddTask } from "../addTask/AddTask"
import { Task } from "../task/Task";
import { URL } from "../../App";


export const Home = () => {

    return (
        <div className="home">
            <h2>To Do</h2>
            <div className="container">
                <div>Hello world</div>
            </div>
        </div>
    )
}