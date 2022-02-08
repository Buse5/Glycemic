import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <>
      <div className="ui fixed borderless huge menu" style={{ background: "#54f764" }}>
        <div className="ui container grid" >
          <div className="computer only row">
            <a className="item" href="/" style={{ color: "tomato" }}>Glycemic Indexs</a>
            <a className="item" href="/" aria-current='page' >Home</a>
            <a className="item" href="/contact" aria-current='page'>Contact</a>
            <a className="item" href="/login" aria-current='page'>Login</a>
            <div className="right menu">
             
              <div className="item">
                <a className="nav-link disabled" style={{ color: "tomato" }}>  Kullanıcı adı  </a>
              </div>
              <div className="item">
              <Icon link name='shopping basket' size='big'></Icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
