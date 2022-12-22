import React, { useState,useContext, useEffect} from 'react'
import { Typography,Button } from '@mui/material'
import Row from '../../BaseComponents/Row/Row'
import Col from '../../BaseComponents/Col/Col'

import './ListItem.css'


export default function ListItem({item,change,config}) {


    return (

        <Row classList={'o-sub py-4 px-4'}  >
            
            <Col classList={'bo c-expand'}>
                
                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-start'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Name
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.name}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-expand  c-x-start'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Address
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.address+". Near : "+item.landmark}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>
                    <Button onClick={(e)=>{ change.goToLocation(item) }}  color='success' variant={'outlined'}>Location</Button>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>
                    <Button onClick={(e)=>{ change.callCustomer(item) }}  color='success' variant={'outlined'}>Call</Button>
                </Row>

            </Col>
            <Col classList={'bo c-expand c-x-center '}>
                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                User ID
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.user_id}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>   

                <Row classList={'bo py-2 r-x-start'}>
                    <Col classList={'bo c-collapse  c-x-center'}>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'1rem', fontWeight:1000,marginLeft:'10px'}} >
                                Order ID
                            </Typography>  
                        </Col>
                        <Col>
                            <Typography sx={{color:'#457848', fontSize:'.75rem', fontWeight:100,marginLeft:'10px'}} >
                                {item.order_id+config.ORDER_ID_MASK}
                            </Typography>  
                        </Col>
                    </Col>
                </Row>

                <Row classList={'bo py-2 r-x-start'}>

                    {(item.status == "fulfilled")?
                        <Button onClick={(e)=>{ change.acceptDelevery(item.order_id) }}  color='success' variant={'contained'}>Accept</Button>
                    :(item.status == "outForDelivery")?
                        <Button onClick={(e)=>{ change.completeDelivery(item.order_id) }}  color='success' variant={'outlined'}>Complete</Button>
                    :(item.status == "completed")?
                        <Typography>Completed</Typography>
                    :
                        <div></div>
                    }
                    
                </Row>

            </Col>
        </Row>

    )

}
