import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import './Styles/Style.scss';
import { useNavigate } from 'react-router-dom';
import { StringInput } from '../../Components/Input/Input';
import { Button } from '../../Components/Button/Button';
import { InitCard } from '../../Components/InitCard/InitCard';
import * as Yup from 'yup';
import { Header } from '../../Components/Header/Header';


type CreateCompanyProfileRequest = {
    name: string
    description: string
}


export const CompanyProfilePage = () => {

    
    let navigate = useNavigate();
    
    function goToLogin() {
        navigate("/");
    }
    
    const setProfileSubmit = (values: CreateCompanyProfileRequest, {setSubmitting}: any) => {
        
        setSubmitting(false);
    
    }

    const validation = Yup.object().shape({
        name: Yup.string()
        .required('Required'),
        description: Yup.string()
        .max(40, 'حداکثر 40 کاراکتر')
        .required('Required'),
    });

    const initVal : CreateCompanyProfileRequest = {name: '', description: ''}
    return(
        <div>
            <InitCard>
                {Header({name: 'پروفایل شرکت'})}
                <Formik
                    initialValues={initVal}
                    validationSchema={validation}
                    onSubmit={setProfileSubmit}
                    >
                    {({
                        errors,
                        touched,
                        isSubmitting,
                        /* and other goodies */
                        }) => (
                            <Form>
                                {StringInput({dir: 'rtl', name: 'name', placeholder:  'نام شرکت'})}
                                {errors.name && touched.name && errors.name}
                                {StringInput({dir: 'rtl', name: 'description', placeholder:  'توضیح'})}
                                {errors.description && touched.description && errors.description}
                                <div className='w-full text-center mt-12'>
                                    {Button({lang: 'fa', size: 'XXL', disabled: isSubmitting, type: 'submit', children: 'ثبت', gruop: 'Primary'})} 
                                </div>
                                
                                
                            </Form>
                        )}
                </Formik>
            </InitCard>
        </div>
    );
}