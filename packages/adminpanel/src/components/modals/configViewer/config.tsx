import style from '../modal.module.css';
import configStyle from './config.module.css';
import { Text, Button } from 'paaskit';
import svg from '../../../assets/createNode.svg';
import ModalState from '../../../models/modal';
import React from 'react';
import ConfigNet from '../../../network/config';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';
import anOldHope from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope';
import { toast } from 'react-toastify';

SyntaxHighlighter.registerLanguage('yaml', yaml);

const ConfigModal = () => {
    const [config, setConfig] = React.useState('');

    React.useEffect(() => {
        ConfigNet.get().then((data) => {
            setConfig(data.config);
        });
    }, []);

    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(config);
            toast.success('Конфиг скопирован в буфер обмена', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        } catch (err) {
            toast.error('Не удалось скопировать текст.\n Проверьте настройки браузера', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <div className={style.block + ' ' + configStyle.block}>
            <img src={svg} alt={'node icon'} />
            <div className={style.title + ' ' + configStyle.title}>
                <Text type={'modalTitle'}>
                    Это конфиг Вашего кластера
                </Text>
            </div>
            <div className={style.desc + ' ' + configStyle.desc}>
                <Text type={'tableDesc'}>
                С помощью конфигурационного файла и утилиты kubectl Вы можете выполнять весь спектр операций по управлению кластером Kubernetes из командной строки.
                Подробнее в официальной документации <a href={'https://kubernetes.io/docs/reference/kubectl/'}>Kubernetes</a>.
                </Text>
            </div>
            <div className={configStyle.hr}></div>
            <div className={configStyle.code}>
                <SyntaxHighlighter showLineNumbers wrapLines customStyle={{margin: 0, padding: '12px 0'}} language={'yaml'} style={anOldHope}>
                    {config}
                </SyntaxHighlighter>
            </div>
            <div className={configStyle.hr}></div>
            <Button isSec type={'input'} callback={copyContent}>
                Скопировать конфиг
            </Button>
        </div>
    );
};

export default ConfigModal;
