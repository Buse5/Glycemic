import React, { useEffect, useState } from 'react';
import { Grid, Icon, Label } from 'semantic-ui-react';
import { ResultFoods } from '../models/IFoods';
import Moment from 'moment';

interface foodsModel {
    item: ResultFoods
}
function itemColor(glyIndex: any) {
    if (glyIndex <= 55) {
        return <div style={{ backgroundColor: "#00d900", borderRadius: 20 }}><Icon link name='pointing down' /> Glycemic Index  <Icon link name='pointing down' /></div>
    } else if (glyIndex > 55 && glyIndex <= 70) {
        return <div style={{ backgroundColor: "#f57f0a", borderRadius: 20 }}><Icon link name='pointing down' /> Glycemic Index  <Icon link name='pointing down' /> </div>
    } else {
        return <div style={{ backgroundColor: "#ff0000", borderRadius: 20 }}><Icon link name='pointing down' /> Glycemic Index  <Icon link name='pointing down' /> </div>
    }

}
export default function FoodItems(foods: foodsModel) {
    return <>
        <Grid.Column mobile={8} tablet={8} computer={4}>
            <div className="ui cards ">
                <div className="ui card">
                    <div className="header" style={{ textAlign: "center", backgroundColor: "#54f764", opacity: 0.9 }}>Meyve</div>
                    <div className="header" style={{ textAlign: "center" }}>
                        <img src={foods.item.image} ></img>
                        <h2 className="header" style={{ textAlign: "center" }}>{foods.item.name}</h2>
                    </div>
                    <div className="content">
                        <div className="meta" >
                            <h3 style={{ textAlign: "center", color: "black" }}>{itemColor(foods.item.glycemicindex)} {foods.item.glycemicindex}</h3>
                        </div>
                    </div>
                    <div className="extra content" >Created By:
                        <span className="right floated">

                            {foods.item.createdBy}
                        </span >
                        <br></br>Modified By:
                        <span className="right floated" >
                            {foods.item.modifiedBy}
                        </span>
                    </div>
                    <div className="extra content" >
                        Crated  Date:
                        <span className="right floated">
                            <i className="calendar icon"></i>
                            {Moment(foods.item.createdDate).format("DD/MM/YY")}
                        </span>
                        Modified Date:
                        <span className="right floated">
                            <i className="calendar icon"></i>
                            {Moment(foods.item.modifiedDate).format("DD/MM/YY")}
                        </span>
                    </div>
                </div>
            </div>
        </Grid.Column>
    </>;
}
