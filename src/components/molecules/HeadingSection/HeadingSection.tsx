import React from 'react'

import profilePic from '../../../assets/profile-pic.png';
import hiEmoji from '../../../assets/hi-emoji.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from './HeadingSection.module.scss';
import { IconButton } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

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
                        {title} &nbsp;
                        <span>
                            <img src={hiEmoji} height={50} />
                        </span>
                    </span>
                    <p className={styles['sub-title']}>
                        {subTitle} 📍
                    </p>
                    <div className={styles.icons}>
                        <IconButton target='_blank' href='https://www.linkedin.com/in/jyothirmai-ch-837711161/'>
                            <LinkedInIcon className={styles['icon']} sx={{ color: 'white' }} />
                        </IconButton>
                        <IconButton target='_blank' href='https://github.com/jyothirmai5'>
                            <GitHubIcon className={styles['icon']} sx={{ color: 'white' }} />
                        </IconButton>

                    </div>
                </div>
                <img className={styles['profile-img']} src={profilePic} width={isMobile || isTablet ? 250 : 400} />
            </div>
        </div>
    )
}

export default HeadingSection
