import { FunctionComponent, useCallback, useEffect, useRef, useState } from "react";
import Input from "../../atoms/Input/Input";
import styles from './Contact.module.scss';
import { useDispatch } from "react-redux";
import { addRef } from "../../../redux/slices/persistedSlice";
import { Alert, Button, Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import EmailIcon from '@mui/icons-material/Email';
import { useMediaQuery } from "react-responsive";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    const contactRef = useRef(null);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });

    useEffect(() => {
        saveContactRef(contactRef)
    }, []);

    const saveContactRef = useCallback(
        (contactRef: any) => {
            dispatch(addRef({ refName: 'contactRef', refValue: contactRef }))
        },
        [dispatch]
    );
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        console.log(event);

        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6bd6bfe",
                "template_li51ch7",
                e.target,
                "vM9PPl-V4HPaGWDFT"
            )
            .then(
                (result) => {
                    console.log(result);
                    e.target.reset();
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                    setOpen(true);
                },
                (error) => {
                    console.log(error);
                }
            );
    };
    return (
        <>
            <div className={styles['contact-container']} ref={contactRef}>
                <form onSubmit={sendEmail} className={styles['contact-form-div']}>
                    <div className={styles['input-fields']}>
                        <Input name='name' label="Your Name" type="text" value={formData.name}
                            onChange={handleChange} />
                        <Input name='email' label="Your Email" type="email" value={formData.email}
                            onChange={handleChange} />
                    </div>
                    <Input name='message' label="Your Message" type="text" isMessage={true} value={formData.message}
                        onChange={handleChange} />
                    <Button className="bg-link-color" sx={{ color: '#242424', fontWeight: '700' }} variant="contained" type="submit">Send Message</Button>
                </form>
                <div className={styles['contact-text']}>
                    <h2 className={styles['text-style-label']}>Get In
                        {!isMobile && !isTablet && <br />}<span className={styles['colored-text']}>Touch</span>.</h2>
                    <p className={styles['contact-subtitle']}> Have a question or project in mind?
                        <br />
                        Feel free to reach out! I'm here to help turn your ideas into reality.
                    </p>
                    <div>
                        <div className={styles['email-text']}><EmailIcon fontSize={isMobile || isTablet ? 'small' : 'large'} sx={{ color: '#2cf8ff' }} />
                            <div className={`${styles['contact-subtitle']}`}>
                                <span>Mail Me</span><br />
                                <a className={styles['colored-text']} href="mailto:chjyothirmai5@gmail.com">chjyothirmai5@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%', background: 'linear-gradient(to right, #2cf8ff, #18ffb0)', color: '#242424' }}
                >
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Contact;