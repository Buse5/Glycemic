import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { zoomIn } from 'react-animations'
import { useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { Card, Item } from 'semantic-ui-react'
import styled, { keyframes } from 'styled-components'
import NavBar from './components/NavBar'
import { categories } from './Datas'
import { ISingleFoods, ResultFoods } from './models/IFoods'
import { foodDetails } from './Services'

const animation = keyframes`${zoomIn}`
const AnimateDiv = styled.div`
  animation: forwards 2s ${animation};
`;

export default function Details() {
    const [food, setFood] = useState<ResultFoods>()
    const { url } = useParams()
    useEffect(() => {
        foodDetails(url!).then(res => {
            const dt: ISingleFoods = res.data;
            setFood(dt.result!)
        }).catch(err => {
            toast.dismiss();
            toast.error("" + err)
        })
    }, [])

    return (
        <>
             <ToastContainer />
      <NavBar />
      <AnimateDiv >
        <h1 style={{ textAlign: "center", color: "tomato", textShadow: "initial", fontFamily: "monospace", fontSize: 50 }}> {food?.name} Detayı</h1>
      </AnimateDiv>
            <Card.Group mobile={8} tablet={8} computer={4}>
                <Card fluid>
                      <div className="header" style={{ textAlign: "center", backgroundColor: "#54f764", opacity: 0.9 }}>{categories[food?.cid!].text}</div>
                    <Card.Content>
                        {food?.image !== "" &&
                            <Item.Image
                                floated='right'
                                size='small'
                                src={food?.image}
                            />
                        }
                        {food?.image === "" &&
                            <Item.Image
                                floated='right'
                                size='small'
                                src='../foods.png'
                            />
                        }
                        
                        <Card.Header >{food?.name} </Card.Header>
                        <div className="extra content" >Created By:
                        <span >
                            {food?.createdBy}
                        </span >
                        <br></br>Modified By: 
                        <span  >
                            {food?.modifiedBy}
                        </span>
                    </div>
                    <div className="extra content" style={{ marginTop: '10px' }} >
                        Crated  Date: 
                        
                        <span >
                            <i className="calendar icon" ></i>
                            {moment(food?.createdDate).format("DD/MM/YY")}
                        </span>
                        <br></br>
                        Modified Date: 
                        <span >
                            <i className="calendar icon"></i>
                            {moment(food?.modifiedDate).format("DD/MM/YY")}
                        </span>
                    </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </>
    )
}