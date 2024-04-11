
import { MessageDisplay } from './MessageDisplay'
import { getLocalStorage } from '../setOrGetLocalStorage/getLocalStorage';
import styles from './PopupGpt.module.css'
import { useState } from 'react';
import React, { useEffect, useRef } from 'react';
import { FormGpt } from './FormGpt';

export function PopupGpt() {
    const [isChatActive, setChatActive] = useState(false);
    const [request, setRequest] = useState("");
    const [response, setResponse] = useState(getLocalStorage("gptResponse"));
    const responseBlockRef = useRef<HTMLDivElement>(null);
    const [isActiveDrag, setActiveDrag] = useState(false);
    const [blockHeight, setBlockHeight] = useState(400);
    const [loading, setLoading] = useState(false);
    const refWrap = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const responseBlock = responseBlockRef.current;
        if (responseBlock) {
            responseBlock.scrollTop = responseBlock.scrollHeight;
        }
    }, [response]);
 
    function onMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (!isActiveDrag) {
            return;
        }
        const carent = window.innerHeight - refWrap.current!.clientHeight;
        const resolt = carent - e.clientY + blockHeight;
        setBlockHeight(resolt > 80 ? resolt : 80);
    }
    return (
        <>
            {!isChatActive &&
                <div className={styles.open} onClick={() => setChatActive(true)}></div>
            }
            <div
                onMouseMove={onMouseMove}
                style={isActiveDrag ? { height: `100%` } : {}}
                className={isChatActive ? `${styles.chat} ${styles.chatActive}` : `${styles.chat}`}>
                <div
                    ref={refWrap}
                    onMouseUp={() => setActiveDrag(false)}
                    className={styles.wrap}
                >
                    <div className={styles.close}>
                        <button onClick={() => setChatActive(false)}></button>
                    </div>
                    <div
                        style={{ height: `${blockHeight}px` }}
                        className={styles.responseBlock}
                        ref={responseBlockRef}
                    >
                        <MessageDisplay response={response}></MessageDisplay>
                    </div>
                    <FormGpt request={request} loading={loading} setRequest={setRequest} setResponse={setResponse} setLoading={setLoading}></FormGpt>
                    <div onMouseDown={() => { setActiveDrag(true) }} className={styles.line} />
                </div>
            </div>
        </>
    )
}