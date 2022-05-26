import React from "react";
import './App.js';
import './index.js';


class TableArr extends  React.Component{
    
    state = {
        fNameArr : [
            {id:1, year:'1722', name:'Skovoroda Grigory Savich'},
            {id:2, year:'1814', name:'Shevchenko Taras Grigorovich'},
            {id:3, year:'1819', name:'Kulish Panteleimon Oleksandrovich'},
            {id:4, year:'1871', name:'Larisa Petrivna Kosach'},
            {id:5, year:'1895', name:'Rilsky Maxim Tadeyovych'},
            {id:6, year:'1900', name:'Kubiyovich Volodymyr Mikhailovich'},
            {id:7, year:'1938', name:'Stus Vasil Semyonovich'}
        ]
    }
     
    funcSort = (field) => {
        return(a, b) => a[field] > b[field] ? 1: -1;
    
    }
    startSort = () => {
       const newfNameArr = this.state.fNameArr.sort(this.funcSort('name'))
       this.setState({fNameArr: newfNameArr})    
    }
    
    deleteItem = (id) => {
        this.setState(({fNameArr}) => {
            const index = fNameArr.findIndex((item) => item.id === id);
            const newArrDelete = [
                ...fNameArr.slice(0, index),
                ...fNameArr.slice(index + 1)
            ];
            return {
                fNameArr: newArrDelete
            };
        });
    };
    
        
    render () {
        return (
            <table border="1px">
                <thead>
                    <tr>
                        <th data-type="number">Year of birth</th>
                        <th data-type="string">Name  <button onClick={this.startSort}>Sort</button> </th>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>{(this.state.fNameArr[0].year)}</td>
                        <td>{(this.state.fNameArr[0].name)}</td>
                        <td> <button id="add1">Add</button> 
                        <button onClick={this.deleteItem}>delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[1].year)}</td>
                        <td>{(this.state.fNameArr[1].name)}</td>
                        <td><button id="add2">Add</button> <button>delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[2].year)}</td>
                        <td>{(this.state.fNameArr[2].name)}</td>
                        <td><button id="add3">Add</button> <button id ="del3">delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[3].year)}</td>
                        <td>{(this.state.fNameArr[3].name)}</td>
                        <td><button id="add4">Add</button> <button id ="del4">delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[4].year)}</td>
                        <td>{(this.state.fNameArr[4].name)}</td>
                        <td><button id="add5">Add</button> <button id ="del5">delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[5].year)}</td>
                        <td>{(this.state.fNameArr[5].name)}</td>
                        <td><button id="add6">Add</button> <button id ="del6">delete</button></td>
                    </tr>
                    <tr>
                        <td>{(this.state.fNameArr[6].year)}</td>
                        <td>{(this.state.fNameArr[6].name)}</td>
                        <td><button id="add7">Add</button> <button id ="del7">delete</button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default TableArr;