import Footer from './footer'
import Header from './header'
import React from "react";
import {useRouter} from "next/router";
import {withRouter} from "next/router";


const Layout = (
    {children, router}:
        { children: React.ReactElement, router: {pathname: string} },
) => {
    return (

        <div className='content'>
            {router.pathname != '/write' && (<div className="header">
                <Header/>
            </div>)}
            {children}
            {router.pathname != '/write' && (<div className="footer">
                    <Footer/>
                </div>
            )}

        </div>                        //children это все, что есть на странице
    );
}


export default withRouter(Layout as any);