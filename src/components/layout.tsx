import Footer from './footer'
import Header from './header'

const Layout = (    {children}  ) => {
    return(
      <div className='content'>
        <Header/>
            {children}
        <Footer/>
        </div>                        //children это все, что есть на странице
)
}

export default Layout