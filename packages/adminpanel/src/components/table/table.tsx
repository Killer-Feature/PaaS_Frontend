const Table = () => {
    return (
        <table>
            <thead>
                <td>Название</td>
                <td>Публичный адрес</td>
                <td>Статус</td>
                <td>Ссылка на дашборд</td>
                <td>Название кластера</td>
                <td></td>
            </thead>
            <tr>
                <td>Моя любимая тачка</td>
                <td>192.168.1.150</td>
                <td>Запущена</td>
                <td>http://192.168.1.150:3367/</td>
                <td>Мой любимый кластер</td>
                <td></td>
            </tr>
        </table>
    );
};

export default Table;