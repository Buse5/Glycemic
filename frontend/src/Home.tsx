import React, { useEffect, useState } from 'react';
import { allFoodsList } from './Services';
import { ToastContainer, toast } from 'react-toastify';
import { IFoods, ResultFoods } from './models/IFoods';
import NavBar from './components/NavBar';
import FoodItems from './components/FoodItems';
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';
import { Dropdown, Form, FormField, Grid, Input, Pagination, Select } from 'semantic-ui-react';

const animation = keyframes`${zoomIn}`
const AnimateDiv = styled.div`
  animation: forwards 2s ${animation};
`;

export default function Home() {

  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  const [foodsArr, setFoodsArr] = useState<ResultFoods[]>([]);
  const [searchArr, setSearchArr] = useState<ResultFoods[]>([]);


  useEffect(() => {

    toast.loading("Yükleniyor.")
    allFoodsList().then(res => {
      const dt: IFoods = res.data;
      setFoodsArr(dt.result!)
      setSearchArr(dt.result!)
      toast.dismiss();
    }).catch(err => {
      toast.dismiss();
      toast.error("" + err)
    })

  }, []);

const search =(q:string)=>{

  if(q===""){
    setFoodsArr(searchArr)
  }else{
    q=q.toLowerCase()
    const newArr=searchArr.filter(item=>item.name?.toLowerCase().includes(q))
    setFoodsArr(newArr)
  }
}
  return (
    <>
      <NavBar />
      <ToastContainer />
      <AnimateDiv style={{ marginTop: 80 }}>
        <h1 style={{ textAlign: "center", color: "tomato", textShadow: "initial", fontFamily: "monospace", fontSize: 50 }}> ALL FOODS </h1>
      </AnimateDiv>

      <Grid columns='2'>
        <Grid.Row>
          <Grid.Column>
            <Input onChange={(e)=>search(e.target.value)}
            fluid style={{ marginBottom: 10 }}
              icon='search'
              iconPosition='left'
              label={{ tag: true, content: 'Arama' }}
              labelPosition='right'
              placeholder='Arama Yap'
            />
          </Grid.Column>
          <Grid.Column>
            <Select fluid compact options={options} defaultValue='Kategori Seç' />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        {
          foodsArr.map((item, index) =>
            <FoodItems key={index} item={item} />
          )
        }
     
      </Grid>
      <Grid>
      <Pagination defaultActivePage={1} totalPages={10} />
      </Grid>
    </>
  );
}