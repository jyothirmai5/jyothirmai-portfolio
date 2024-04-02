import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, IconButton } from '@mui/material'
import styles from './Footer.module.scss';

const Footer: React.FC<any> = () => {
    return (
        <div className={styles.footer}>
            <Grid
                container
                sx={{ display: 'block' }}>

            </Grid>
            <div className={styles['footer-seperator']}>
                <b className="font-button-color">
                    Copyright ©2024 All Rights Reserved
                </b>
                <div className={styles.icons}>
                    <IconButton target='_blank' href='https://www.linkedin.com/in/jyothirmai-ch-837711161/'>
                        <LinkedInIcon className={styles['icon']} sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton target='_blank' href='https://github.com/jyothirmai5'>
                        <GitHubIcon className={styles['icon']} sx={{ color: 'white' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Footer
