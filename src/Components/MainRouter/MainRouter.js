import { Link, Route, Router, Routes, useLocation } from 'react-router-dom';
import Orders from '../Orders/Orders'
import Login from '../Login/Login'
import Dialogue from "../BaseComponents/Dialogue/Dialogue";

export default function MainRouter(){

    const loc = useLocation();

    return(

        <>

            <Dialogue />

            <Routes location={loc} key={loc.key} >
                <Route path='/' element={<Orders />} />
                <Route path='Login' element={<Login />} />
            </Routes>             
        </>


    )
}