import React from 'react'

import { Grid } from '@mui/material'

import './Footer.scss'

const Footer: React.FC<any> = () => {
    return (
        <div className="footer">
            <div className="footer-title">
                <div className="footer-logo">

                </div>
                <Grid
                    container
                    marginBottom={{ xs: '35px', lg: '55px' }}
                    sx={{ display: 'block' }}>

                </Grid>
                <div className="footer-seperator">
                    <p className="font-button-color">
                        Copyright ©2024
                    </p>
                    <div>
                        <p className="font-button-color">
                            All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
