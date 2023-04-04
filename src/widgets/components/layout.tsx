import Footer from './footer'
import Header from './header'
import React from "react";

const Layout = (    {children}: {children: React.ReactElement}  ) => {
    return(
      <div className='content'>
        <Header/>
          {children}
        <Footer/>
        </div>                        //children это все, что есть на странице
)
}

export default Layout