import React, { useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function NavBar() {

  const [activeItem, setActiveItem] = useState("")
  const handleItemClick = (name:string) => {
    setActiveItem(name)
  }
  const [open, setOpen] = React.useState(false)

  return (
    <Menu secondary style={{ backgroundColor: "#b7f7a8", borderRadius: 10, height: 50}}>
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
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            onClick={ (e, data) => handleItemClick(data.name!) }
          />
          <Menu.Item
            name='Kayıt Ol'
            active={activeItem === 'Kayıt Ol'}
            onClick={ (e, data) => handleItemClick(data.name!) }
          />
        </Menu.Menu>
      </Menu>
  )
}