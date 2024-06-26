import React from 'react'

import profilePic from '../../../assets/profile-pic.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './HeadingSection.module.scss';
import { Button, IconButton } from '@mui/material';
import { useMediaQuery } from 'react-responsive';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

interface IHeadingProps {
    title: string;
    subTitle: string;
}
const HeadingSection: React.FC<IHeadingProps> = ({
    title,
    subTitle,
    // children,
}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });

    return (
        <div className={styles.heading}>
            <div className={styles.heroMain}>
                <div className={styles.heroText}>
                    <span className={styles.title}>
                        {title}
                    </span>
                    <p className={styles['sub-title']}>
                        {subTitle} 📍
                    </p>
                    <div className={styles.icons}>
                        <IconButton target='_blank' href='https://www.linkedin.com/in/jyothirmai-ch-837711161/'>
                            <LinkedInIcon className={styles['icon']} sx={{ color: 'white' }} />
                        </IconButton>
                        <a target='_blank' href='jyothirmai-resume.pdf' className={styles['a-link']}>
                            <Button className={styles['cv-btn']} variant="text">Download CV &nbsp;
                                <CloudDownloadIcon />
                            </Button>
                        </a>
                    </div>
                </div>
                <img className={styles['profile-img']} src={profilePic} width={isMobile || isTablet ? 250 : 400} />
            </div>
        </div>
    )
}

export default HeadingSection
