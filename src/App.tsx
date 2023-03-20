import {useCallback, useState} from 'react';
import {useFormik} from "formik";

import {useCrypto} from "./hooks/useCrypto";

function App() {
    const {decrypt, encrypt} = useCrypto();
    const [encrypted, setEncrypted] = useState("");
    const [decrypted, setDecrypted] = useState("");
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            middle_name: "",
            iin: "",
            key: ""
        },
        onSubmit(values: any) {
            const data = JSON.stringify({
                first_name: values.first_name,
                last_name: values.last_name,
                middle_name: values.middle_name,
                iin: values.iin,
            });
            const encryptedData = encrypt(values.key, data);
            setEncrypted(encryptedData);
        }
    });
    const decryptHandler = useCallback(() => {
        if(encrypted && formik.values.key) {
            const decryptedData = decrypt(formik.values.key, encrypted);
            setDecrypted(decryptedData);
        }
    }, [encrypted, formik.values.key]);

    return (
        <div className={"container mx-auto py-8 max-w-lg flex flex-col gap-2"}>
            <input
                name={"iin"}
                type="text"
                className={"BaseField"}
                placeholder={"ИИН"}
                value={formik.values.iin}
                onChange={formik.handleChange}
            />
            <input
                name={"last_name"}
                type="text"
                className={"BaseField"}
                placeholder={"Фамилия"}
                value={formik.values.last_name}
                onChange={formik.handleChange}
            />
            <input
                name={"first_name"}
                type="text"
                className={"BaseField"}
                placeholder={"Имя"}
                value={formik.values.first_name}
                onChange={formik.handleChange}
            />
            <input
                name={"middle_name"}
                type="text"
                className={"BaseField"}
                placeholder={"Отчество"}
                value={formik.values.middle_name}
                onChange={formik.handleChange}
            />
            <input
                name={"key"}
                type="text"
                className={"BaseField"}
                placeholder={"Ключ шифрования"}
                value={formik.values.key}
                onChange={formik.handleChange}
            />
            <div className={"flex gap-2 mb-4"}>
                <button className={"BaseButton"} onClick={formik.submitForm}>Шифровать</button>
                <button className={"BaseButton"} onClick={decryptHandler}>Дешифровать</button>
            </div>
            <input
                name={"crypt"}
                type="text"
                className={"BaseField"}
                placeholder={"Зашифрованное значение"}
                value={encrypted}
                readOnly
            />
            <input
                name={"decrypted"}
                type="text"
                className={"BaseField"}
                placeholder={"Расшифрованное значение"}
                value={decrypted}
                readOnly
            />
        </div>
    )
}

export default App;
