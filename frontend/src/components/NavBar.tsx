import React, { useState } from 'react'
import { Button, Checkbox, Form, Header, Icon, Input, Menu, Modal } from 'semantic-ui-react'

export default function NavBar() {

  const [activeItem, setActiveItem] = useState("")
  const handleItemClick = (name: string) => {
    setActiveItem(name)

  }
  const [open, setOpen] = React.useState(false)

  return (
    <>
    
      <Menu secondary style={{ backgroundColor: "#b7f7a8", borderRadius: 10, height: 50 }}>
        <Menu.Item
          name='Anasayfa'
          active={activeItem === 'Anasayfa'}
          onClick={(e, data) => handleItemClick(data.name!)}
        />
        <Menu.Item
          name='Gıda Ekle'
          active={activeItem === 'Gıda Ekle'}
          onClick={(e, data) => handleItemClick(data.name!)}
        />
        <Menu.Item
          name='Eklediklerim'
          active={activeItem === 'Eklediklerim'}
          onClick={(e, data) => handleItemClick(data.name!)}
        />
        <Menu.Menu position='right'>
          <Modal
            size="small"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={{ backgroundColor: "#b7f7a8" }}>Giriş Yap</Button>}
          >
            <Modal.Header style={{textAlign:"center", fontSize:20, color: "tomato", textShadow: "initial", backgroundColor:"green"}} >Giriş Yap</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                  <h3>Email: </h3>
                  <div className="ui left icon input">                 
                    <i className="user icon"></i>
                    <input placeholder='Email' type="email" className="form-control" id="email" />
                    </div>
                  </Form.Field>
                  <Form.Field>
                    <h3>Şifre: </h3>
                    <div className="ui left icon input">  
                    <i className="lock icon"></i>
                    <input placeholder='Şifre'  type="password" className="form-control" id="pasword" />
                    </div>
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='Beni hatırla' />
                  </Form.Field>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                content="Giriş"
                type="submit"
                labelPosition='right'
                icon='checkmark'
                positive
              />
            </Modal.Actions>
          </Modal>


          <Modal
            size="small"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button style={{ backgroundColor: "#b7f7a8" }}>Kayıt Ol</Button>}
          >
            <Modal.Header style={{textAlign:"center", fontSize:20, color: "tomato", textShadow: "initial"}} >Kayıt Ol</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                <Form.Field>
                  <h3>Ad: </h3>
                    <input placeholder='Ad' type="text" className="form-control" id="ad" />              
                  </Form.Field>
                  <Form.Field>
                  <h3>Soyad: </h3>
                    <input placeholder='Soyad' type="text" className="form-control" id="soyad" />
                  </Form.Field>
                  <Form.Field>
                  <h3>Telefon: </h3>
                    <input placeholder='Telefon' type="text" className="form-control" id="telefon" />
                  </Form.Field>
                  <Form.Field>
                  <h3>Şehir Kodu: </h3>
                    <input placeholder='Şehir Kodu' type="number" className="form-control" id="sehirId" />
                  </Form.Field>
                  <Form.Field>
                  <h3>Email: </h3>
                    <input placeholder='Email' type="email" className="form-control" id="email" />
                  </Form.Field>
                  <Form.Field>
                    <h3>Şifre: </h3>
                    <input placeholder='Şifre'  type="password" className="form-control" id="pasword" />
                  </Form.Field>
                </Form>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                content="Kayıt Ol"
                type="submit"
                labelPosition='right'
                icon='checkmark'
                positive
              />
            </Modal.Actions>
          </Modal>




          <Icon link name='shopping basket' size='big' style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}></Icon>
        </Menu.Menu>
      </Menu>
    </>
  )
}