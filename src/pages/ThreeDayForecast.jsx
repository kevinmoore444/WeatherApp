import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'

const ThreeDayForecast = () => {
  return (
    <div>
        <NavigationBar/>
        <h1>Three Day Forecast For Chicago, Illinois</h1>
    <Container sx={{marginY: 5, display: 'flex', justifyContent: 'center'}}>
        {/* Day 1 */}
        <Card sx={{ width: '30%', height: '300px'}}>
            <CardMedia
                sx={{width: 1/2, height: 1/2, mx: 'auto', marginTop:'20px' }}
                image="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
                title="weather_icon"
            />
            <CardContent>
                <Typography variant="h5">
                Cloudy
                </Typography>
            </CardContent>
        </Card>

        {/* Day 2 */}
        <Card sx={{ width: '30%', height: '300px'}}>
            <CardMedia
                sx={{width: 1/2, height: 1/2, mx: 'auto', marginTop:'20px' }}
                image="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
                title="weather_icon"
            />
            <CardContent>
                <Typography variant="h5">
                Cloudy
                </Typography>
            </CardContent>
        </Card>
        {/* Day 3 */}
        <Card sx={{ width: '30%', height: '300px'}}>
            <CardMedia
                sx={{width: 1/2, height: 1/2, mx: 'auto', marginTop:'20px' }}
                image="https://cdn-icons-png.flaticon.com/512/5903/5903939.png"
                title="weather_icon"
            />
            <CardContent>
                <Typography variant="h5">
                Cloudy
                </Typography>
            </CardContent>
        </Card>
    </Container>


    </div>
  )
}

export default ThreeDayForecast