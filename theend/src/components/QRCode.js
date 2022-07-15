import React, {useState, useEffect} from 'react'
import QRCODE from 'qrcode';
export default function QRCode({qrcodevalue}) {
    const [src, setSrc]=useState([])

  useEffect(()=>{
    QRCODE.toDataURL(qrcodevalue)
          .then((data)=>{
            setSrc(data);
          });
  },[])
  return (
    <div>
        <img src={src} alt={qrcodevalue}/>
    </div>
  )
}
