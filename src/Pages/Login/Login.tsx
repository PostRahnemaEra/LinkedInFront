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
        <div className="row bg-app font-medium mainBox">
            <div className="col-xs-12 col-md-4 col-sm-4 bg-white form-box">
                <div className="row py-5">
                    <div className="col-12 pt-5 pb-3 text-center">
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
                    <form onSubmit={handleSubmit} noValidate={true}>
                        <div className="col-12 py-1 text-center d-ltr">
                            <div className="inner-addon left-addon">
                                <i className="bi bi-envelope"></i>
                                <input type="text" name="username" className="form-control" placeholder="username" onChange={handleChange} onBlur={handleBlur} value={values.username}/>
                            </div>
                        </div>
                        {errors.username && touched.username && errors.username}
                        <div className="col-12 py-1 text-center d-ltr">
                            <div className="inner-addon left-addon">
                                <i className="bi bi-lock"></i>
                                <input type="password" name="password" className="form-control" placeholder="password" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                            </div>
                        </div>
                        {errors.password && touched.password && errors.password}
                        
                        <div className="col-12 py-3 text-center" >
                            <button type="submit" className="btn btn-primary w-100 rounded-pill" disabled={isSubmitting}>
                               ورود
                            </button>
                        </div>
                    </form>
                    )}
                    </Formik>
                    <div className="col-12 py-1 text-center" >
                        <h6 className="text-secondary">عضو نیستم</h6>
                    </div>
                    <div className="col-12 py-3 text-center" >
                        <button type="button" className="btn btn-outline-primary w-100 rounded-pill" onClick={goToSignUp}>ثبت نام</button>
                    </div>
                
                  
                </div>
            </div>
        </div>
    );

}
