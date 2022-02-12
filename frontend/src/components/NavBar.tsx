import React, { useEffect, useState } from 'react'
import { Menu, Button, Modal, Form, Icon } from 'semantic-ui-react'
import { cities } from '../Datas';
import { IUser } from '../models/IUser';
import { userAndAdminLogin } from '../Services';
import { ToastContainer, toast } from 'react-toastify';
import { encryptData } from '../Util';

export default function NavBar() {

  const [activeItem, setActiveItem] = useState("")
  
  // modal delete state
  const [modalStatus, setModalStatus] = useState(false);
  const [modalLoginStatus, setModalLoginStatus] = useState(false)

  // login and register states
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPass, setUserPass] = useState("");

  // login status
  const [loginStatus, setLoginStatus] = useState(false)
  useEffect(() => {
    console.log( "useEffect Call" )
  }, [loginStatus])
  
  
   
  const handleItemClick = (name:string) => {
    setActiveItem(name)
  }

  const showModal = () => {
    setModalStatus(true);
  }

const showLoginModalStatus = () => {
    setModalLoginStatus(true);
  }


  // login fnc
  const login = () => {
    toast.loading("Yükleniyor.")
    userAndAdminLogin(userMail, userPass).then( res => {
      const usr: IUser = res.data
      if ( usr.status! ) {
        const userResult = usr.result!

        //key
        const key=process.env.REACT_APP_SALT
        const cryptString=encryptData(userResult,key!)

        localStorage.setItem( "user", cryptString )
        setLoginStatus( usr.status! )
      }
      toast.dismiss();
    }).catch( err => {
      toast.dismiss();
      toast.error( "Bu yetkilerde bir kullanıcı yok!" )
    })
  }

  // register fnc
  const register = () => {
    console.log( userMail + " " + userPass )
  }

  return (
    <>
      <ToastContainer />
        <Menu secondary style={{ backgroundColor: "#b7f7a8", borderRadius: 10, height: 60 }}>
          <Menu.Item>
            <img alt="logo" src='/logo.png' style={{width:50,height:50}}/>
          </Menu.Item>
            <Menu.Item
            name='Anasayfa'
            active={activeItem === 'Anasayfa'}
            onClick={ (e, data) => handleItemClick(data.name!) }
            />
            <Menu.Item
            name='Gıda Ekle'
            active={activeItem === 'Gıda Ekle'}
            onClick={ (e, data) => handleItemClick(data.name!) }
            />
            <Menu.Item
            name='Eklediklerim'
            active={activeItem === 'Eklediklerim'}
            onClick={ (e, data) => handleItemClick(data.name!) }
            />
            <Menu.Menu position='right'>
            <Menu.Item
                name='Giriş Yap'
                active={activeItem === 'Giriş Yap'}
                onClick={ (e, data) => showLoginModalStatus() }
            />
            <Menu.Item
                name='Kayıt Ol'
                active={activeItem === 'Kayıt Ol'}
                onClick={ (e, data) => showModal() }
            />
            </Menu.Menu>
        </Menu>

            <Modal
                open={modalStatus}
                onClose={ () => setModalStatus(false) } 
                size="small"  
            >
            <Modal.Header style={{textAlign:"center", fontSize:20, color: "tomato", textShadow: "initial"}}>Kayıt Formu</Modal.Header>
            <Modal.Content>   
            <Modal.Description>
                <p>Lütfen aşağıdaki bilgileri eksiksiz doldurunuz!</p>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input icon='user' iconPosition='left' onChange={(e) => setUserName(e.target.value)} fluid placeholder='Adınız' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input icon='user' iconPosition='left' onChange={(e) => setUserSurname(e.target.value)} fluid placeholder='Soyadınız' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Select fluid placeholder='Şehir Seç' options={cities} search />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input type='tel'  icon='mobile' onChange={(e) => setUserPhone(e.target.value)} iconPosition='left' fluid placeholder='Telefon' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input value={userMail} type='mail'  icon='mail' onChange={(e) => setUserMail(e.target.value)} iconPosition='left' fluid placeholder='Email' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input value={userPass} type='password' icon='key' onChange={(e) => setUserPass(e.target.value)} iconPosition='left't fluid placeholder='Şifre' />
                  </Form.Group>
                  <Button negative onClick={(e) => setModalStatus(false)}><Icon name='remove circle' /> Vazgeç</Button>
                  <Button primary>
                    <Icon name='sign-in alternate'></Icon>
                      Kayıt Ol
                  </Button>
                </Form>
            </Modal.Description>
            </Modal.Content>
            
            
            </Modal>


            <Modal
              open={modalLoginStatus}
              onClose={ () => setModalLoginStatus(false) }   
            >
            
            <Modal.Header style={{textAlign:"center", fontSize:20, color: "tomato", textShadow: "initial"}}>Üye Girişi</Modal.Header>
            <Modal.Content>
            <Modal.Description>
              <Form>
                <p>Lütfen aşağıdaki bilgileri eksiksiz doldurunuz!</p>
                <Form.Group widths='equal'>
                    <Form.Input value={userMail} onChange={(e,d) => setUserMail( d.value )} type='mail'  icon='mail' iconPosition='left' fluid placeholder='Email' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input value={userPass}  onChange={(e,d) => setUserPass(d.value)} type='password' icon='key' iconPosition='left' fluid placeholder='Şifre' />
                  </Form.Group>
                  <Button negative onClick={(e) => setModalLoginStatus(false)}><Icon name='remove circle' /> Vazgeç</Button>
                  <Button onClick={(e) => login() } primary>
                    <Icon name='sign-in alternate'></Icon>
                      Giriş Yap
                  </Button>
              </Form>
               
            </Modal.Description>
            </Modal.Content>
            
           
            
            
            </Modal>
            

    </>

  )
}