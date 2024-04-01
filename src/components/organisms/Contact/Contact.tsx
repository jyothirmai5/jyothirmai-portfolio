import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import Input from "../../atoms/Input/Input";
import styles from './Contact.module.scss';
import { useDispatch } from "react-redux";
import { addRef } from "../../../redux/slices/persistedSlice";

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {
    const contactRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        saveContactRef(contactRef)
    }, []);

    const saveContactRef = useCallback(
        (contactRef: any) => {
            dispatch(addRef({ refName: 'contactRef', refValue: contactRef }))
        },
        [dispatch]
    );
    return (
        <div ref={contactRef}>
            <h2 className={styles['text-style-label']}>Get in touch</h2>
            <p> Have a question or project in mind? Feel free to reach out! I'm here to help turn your ideas into reality.</p>
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
}

export default Contact;