import loginStyle from './login.module.css';
import style from '../../components/modals/modal.module.css';
import svg from '../../assets/start.svg';
import svgArrow from '../../assets/smartArrow.svg';
import svgSignIn from '../../assets/signin.svg';
import {Text, Button} from 'paaskit';
import { useForm } from 'react-hook-form';
import LoginNet from '../../network/user';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    // @ts-ignore
    const onSubmit = async (data) => {
        try {  
            await LoginNet.signIn(data);
        } catch (err) {
            setError('password', {type: 'invalidInput'});
            setError('user', {type: 'invalidInput'});
            return;
        }

        navigate('/');
    };

    return (
        <div className={loginStyle.block}>
            <div className={loginStyle.left}>
                <div className={loginStyle.leftBlock}>
                    <img src={svgSignIn} className={loginStyle.svg} />

                    <Text type={'title'}>Вход в Huginn</Text>

                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <Text type={'formLabel'}>Имя пользователя</Text>
                        <input className={style.input + (errors.user ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Имя пользователя на сервере'} {...register('user', {
                            required: true,
                        })} />
                        <div className={style.errorBlock}>
                            {errors?.user?.type === 'required' && (
                                <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                            )}
                            {errors?.user?.type === 'invalidInput' && (
                                <Text type={'errorMsg'}>Неправильный логин или пароль</Text>
                            )}
                        </div>

                        <Text type={'formLabel'}>Пароль</Text>
                        <input type='password' className={style.input + (errors.password ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Пароль от SSH'} {...register('password', {
                            required: true,
                        })} />
                        <div className={style.errorBlock}>
                            {errors?.password?.type === 'required' && (
                                <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                            )}
                            {errors?.password?.type === 'invalidInput' && (
                                <Text type={'errorMsg'}>Неправильный логин или пароль</Text>
                            )}
                        </div>
                        

                        <div className={style.buttons}>
                            <Button type={'input'} callback={handleSubmit(onSubmit)}>
                                Войти
                            </Button>
                        </div>

                        <input type="submit" style={{display: 'none'}} />
                    </form>
                </div>
            </div>
            <div className={loginStyle.right}>
                <div className={loginStyle.rightBlock}>
                    <img src={svg} />
                    <div className={loginStyle.smartTitle}>
                        Войди в систему и начни эффективно использовать k8s кластер.
                    </div>
                    <div className={loginStyle.smartText}>
                        Для авторизации в системе необходимо ввести имя пользователя и пароль от SSH на сервере, на котором развернута админ-панель.
                    </div>
                    <img src={svgArrow} className={loginStyle.arrow} />
                </div>
            </div>
        </div>
    )
};

export default Login;