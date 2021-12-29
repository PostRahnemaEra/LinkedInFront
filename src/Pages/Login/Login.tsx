import {useEffect} from 'react';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './Styles/Style.css';


  type loginRequest= {
    username: String
    password: String
}


export const Login = () => {

    const navigate = useNavigate();
    function goToSignUp() {
        navigate("/signUp");
    }

    const submit = (values : any) : void => {
        console.log(values);      
        

        //   setSubmitting(false);
    }

    
    const loginSubmit = (values: any, {setSubmitting}: any): void =>{
    }

    return(
        <div className="min-h-screen flex items-center justify-center mainBox">
            <div className="form-box w-screen md:w-1/3 lg:w-1/3 text-center py-4 rounded-2xl">
                <div className="p-4">
                    <div className="pb-4 mt-12">
                        <h3>ورود</h3>
                    </div>
                    
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validate={values => {
                            const errors: any = {};
                            if (!values.password) {
                                errors.password = 'Required';
                            }
                            if (!values.username) {
                            errors.username = 'Required';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {loginSubmit(values, setSubmitting)}}
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
                    <form className='mt-5' onSubmit={handleSubmit} noValidate={true}>
                        <div className="rounded border-2">
                            <div className="w-full py-1">
                                <i className="bi bi-envelope"></i>
                                <input type="text" name="username" className="text-left w-full" placeholder="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                            </div>
                        </div>
                        {errors.username && touched.username && errors.username}
                        <div className="w-full mt-3 ">
                            <div className="rounded border-2 py-1">
                                <i className="bi bi-lock"></i>
                                <input type="password" name="password" className="text-left w-full" placeholder="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            </div>
                        </div>
                        {errors.password && touched.password && errors.password}
                        <div className='text-blue w-full text-left'>
                            <span>فراموشی رمز عبور</span>
                        </div>
                        <div className="mt-7" >
                            <button type="submit" className="background-blue text-white w-full rounded" disabled={isSubmitting}>
                               ورود
                            </button>
                        </div>
                    </form>
                    )}
                    </Formik>
                    <div className="mt-2" >
                        <h6 className="">عضو نیستم</h6>
                    </div>
                    <div className="mt-2" >
                        <button type="button" className="whiteBtnBlueBorder w-full rounded" onClick={goToSignUp}>ثبت نام</button>
                    </div>
                
                  
                </div>
            </div>
        </div>
    );

}
