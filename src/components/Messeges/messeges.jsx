import React, { useEffect, useState } from "react"
import Messege from "../messege/messege";
import "./messeges.scss"

const Messeges =()=>{
    const [blockHeight, setBlockHeight] = useState()


    useEffect(()=>{
        setBlockHeight(window.innerHeight-281  + 'px')
    },[])
    return(
        <div className="messeges" style={{height:blockHeight}}>
             <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела?"}
                    date={new Date('Sun May 30 2021 17:14:40 GMT+0600 (Восточный Казахстан)')} />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"&"}
                    date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={true} />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела? Привет! Как дела?"}
                    date={new Date('Sun May 30 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={true}
                    isReaded={true}
                />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"&"}
                    date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={false}

                />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"&"}
                    date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={false}

                />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"&"}
                    date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={false}

                />
                <Messege avatar={"https://sun9-2.userapi.com/impf/c851436/v851436222/37ebb/vKShELxAQr4.jpg?size=640x634&quality=96&sign=07cb88dbba3e9547168895f7227f65a9&type=album"}
                    text={"&"}
                    date={new Date('Sun May 29 2021 16:27:40 GMT+0600 (Восточный Казахстан)')}
                    isMe={false}

                />

        </div>
    )
}
export default Messeges;