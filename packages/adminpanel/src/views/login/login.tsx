import loginStyle from './login.module.css';
import style from '../../components/modals/modal.module.css';
import svg from '../../assets/start.svg';
import svgArrow from '../../assets/smartArrow.svg';
import svgSignIn from '../../assets/signin.svg';
import {Text, Button} from 'paaskit';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // @ts-ignore
    const onSubmit = (data) => {
        // ResourseStore.addResourse(data);

        // ModalState.close();
    };

    return (
        <div className={loginStyle.block}>
            <div className={loginStyle.left}>
                <div className={loginStyle.leftBlock}>
                    <img src={svgSignIn} className={loginStyle.svg} />

                    <Text type={'title'}>Вход в Huginn</Text>

                    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                        <Text type={'formLabel'}>Имя пользователя</Text>
                        <input className={style.input + (errors.name ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Имя пользователя на сервере'} {...register('login', {
                            required: true,
                        })} />
                        <div className={style.errorBlock}>
                            {errors?.login?.type === 'required' && (
                                <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
                            )}
                        </div>

                        <Text type={'formLabel'}>Пароль</Text>
                        <input type='password' className={style.input + (errors.name ? (' ' + style.errorInput) : '')} autoComplete={'off'} placeholder={'Пароль от SSH'} {...register('password', {
                            required: true,
                        })} />
                        <div className={style.errorBlock}>
                            {errors?.password?.type === 'required' && (
                                <Text type={'errorMsg'}>Это обязятельное для ввода поле</Text>
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