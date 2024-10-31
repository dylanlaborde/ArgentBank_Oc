import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Main from '../../Components/Main/Main'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Footer from '../../Components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { KEEP_ALIVE } from '../../Actions/actions.type'

function Home() {
    const connected = sessionStorage.getItem('token');
    useDispatch(({type:KEEP_ALIVE}))
    return (
        <>
            <Nav/>
            <Main background="main">
                <Hero/>
            </Main>
            <Features />
            <Footer />
        </>
  )
}

export default Home