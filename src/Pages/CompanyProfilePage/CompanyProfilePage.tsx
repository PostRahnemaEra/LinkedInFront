import { useEffect } from 'react';
import { Formik } from 'formik';
import './Styles/Style.css';
import { useNavigate } from 'react-router-dom';



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

    return(
        <div className="min-h-screen flex items-center justify-center mainBox">
            <div className="form-box w-screen md:w-1/3 lg:w-1/3 text-center py-4 rounded-2xl">
                <div className="p-4">
                    <div className="pb-10 mt-12">
                        <h3>پروفایل</h3>
                    </div>
                    
                    <Formik
                        initialValues={{ name: '', description: '' } as CreateCompanyProfileRequest}
                        validate={values => {
                            const errors: any = {};
                            
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {setProfileSubmit(values, setSubmitting)}}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                    <form className='mt-12' onSubmit={handleSubmit} noValidate={true}>
                        <div className="rounded border-2">
                            <div className="w-full py-1">
                                <i className="bi bi-envelope"></i>
                                <input type="text" name="name" className="text-left w-full" placeholder="نام" onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                            </div>
                        </div>
                        
                        <div className="mt-10" >
                            <button type="submit" className="background-blue text-white w-full rounded" disabled={isSubmitting}>
                               ثبت
                            </button>
                        </div>
                    </form>
                    )}
                    </Formik>
                    
                </div>
            </div>
        </div>
    );
}