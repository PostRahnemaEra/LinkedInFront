import {useEffect} from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './Styles/Style.scss';
import { InitCard } from '../../Components/InitCard/InitCard';
import { EmailInput, PassInput } from '../../Components/Input/Input';
import { Header } from '../../Components/Header/Header';
import { Button } from '../../Components/Button/Button';
import * as Yup from 'yup';

type loginRequest= {
    email: String
    password: String
}

type loginError= {
    email: String
    password: String
}

export const Login = () => {

    const initVal : loginRequest = {password: '', email: ''};
    const navigate = useNavigate();
    function goToSignUp() {
        navigate("/signUp");
    }
    
    const loginSubmit = (values: any, {setSubmitting}: any): void =>{
        setSubmitting(true)
        console.log(values);
        
        setSubmitting(false)
    }

    const validation = Yup.object().shape({
        email: Yup.string()
        .required('Required'),
        password: Yup.string()
        .required('Required'),
    });

    return(
        <div>
            <InitCard>
                {Header({name: 'ورود'})}
                <Formik
                    initialValues={initVal}
                    validationSchema={validation}
                    onSubmit={loginSubmit}
                    >
                    {({
                       
                        errors,
                        touched,
                        isSubmitting
                        /* and other goodies */
                        }) => (
                            <Form>
                                {EmailInput()}
                                {errors.email && touched.email && errors.email}
                                {PassInput()}
                                {errors.password && touched.password && errors.password}
                                {Button({lang: 'fa', size: 'XXL', disabled: isSubmitting, type: 'submit', children: 'ورود', gruop: 'Primary'})}
                                <div className='w-full text-center py-3'><h3>عضو نیستید؟</h3></div>
                                {Button({lang: 'fa', size: 'XXL', disabled: false, type: 'button', children: 'ثبت نام', gruop: 'Secondary'})}
                            </Form>
                        )}
                </Formik>
            </InitCard>
        </div>
    );

}
