import React, { useEffect, useState } from 'react';
import { Icon, Label } from 'semantic-ui-react';
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

        <div className="ui four cards">
            <div className="ui raised card">
                <div className="header" style={{ textAlign: "center", backgroundColor: "#54f764", opacity: 0.9 }}>Meyve</div>
                <div >
                    <img src={foods.item.image} style={{ width: 150, marginLeft: 60 }}></img>
                    <h2 className="header" style={{ textAlign: "center" }}>{foods.item.name}</h2>
                </div>
                <div className="content">
                    <div className="meta" >
                        <h3 style={{ textAlign: "center", color: "black" }}>{itemColor(foods.item.glycemicindex)}</h3>
                        <h3 style={{ textAlign: "center", color: "black" }}>{foods.item.glycemicindex}</h3>
                    </div>
                </div>
                <div className="extra content" >Created By:
                    <span className="right floated">
                        <Label as='a' image size="tiny">
                            <img src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                            {foods.item.createdBy}
                        </Label>
                    </span >
                    <br></br>
                    <br></br>Modified By:
                    <span className="right floated" >
                        <Label as='a' image size="tiny">
                            <img src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                            {foods.item.modifiedBy}
                        </Label>
                    </span>
                </div>
                <div className="extra content" >
                    Crated  Date:
                    <span className="right floated">
                        <i className="calendar icon"></i>
                        {Moment(foods.item.createdDate).format("YY/MM/DD kk:mm:ss")}
                    </span>
                    <br></br>
                    Modified Date:
                    <span className="right floated">
                        <i className="calendar icon"></i>
                        {Moment(foods.item.modifiedDate).format("YY/MM/DD kk:mm:ss")}
                    </span>
                </div>
            </div>
        </div>
    </>;
}
