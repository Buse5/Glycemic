import React, { useEffect, useState } from 'react';
import { allFoodsList } from './Services';
import { ToastContainer, toast } from 'react-toastify';
import { IFoods, ResultFoods } from './models/IFoods';
import NavBar from './components/NavBar';
import FoodItems from './components/FoodItems';
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import { Grid } from 'semantic-ui-react';

const animation = keyframes`${zoomIn}`
const AnimateDiv = styled.div`
  animation: forwards 2s ${animation};
`;
export default function Home() {

  const [foodsArr, setFoodsArr] = useState<ResultFoods[]>([]);

  useEffect(() => {

    toast.loading("Yükleniyor.")
    allFoodsList().then(res => {
      const dt: IFoods = res.data;
      setFoodsArr(dt.result!)
      toast.dismiss();
    }).catch(err => {
      toast.dismiss();
      toast.error("" + err)
    })

  }, []);


  return (
    <>
      <NavBar />
      <ToastContainer />
      <br></br>
      <h1></h1>
      <AnimateDiv>
        <h1 style={{ textAlign: "center", color: "tomato", textShadow: "initial", fontFamily: "monospace", fontSize: 50 }}> ALL FOODS </h1>
      </AnimateDiv>
      <Grid>
        {
          foodsArr.map((item, index) =>
           <FoodItems  key={index}  item={item} />
          )
        }
      </Grid>
    </>
  );
}